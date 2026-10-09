const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const manifest = JSON.parse(read('src/manifest.json'));
const values = new Map(manifest.configs.map(c => [c.key, JSON.parse(read(c.file))]));
for (const [key, value] of values) {
  if (key.startsWith('PARTICLE_')) {
    if (!value.size || !Array.isArray(value.points) || !Number.isInteger(value.count)) throw new Error(`${key}: invalid particle data`);
    if (value.count !== value.points.length) throw new Error(`${key}: count must equal points.length`);
  }
}
const outputs = [];
for (const bundle of manifest.bundles) {
  const parts = JSON.parse(read(bundle.template));
  let output = parts.map(part => {
    if ('text' in part) return part.text;
    let moduleText = read(part.file).trim();
    if (moduleText.endsWith(';')) moduleText = moduleText.slice(0, -1);
    return '\n' + moduleText + '\n';
  }).join('');
  output = output.replace(/\b__MECHCAT_CONFIG_([A-Z0-9_]+)__\b/g, (_, key) => {
    if (!values.has(key)) throw new Error(`Unknown config placeholder: ${key}`);
    return JSON.stringify(values.get(key));
  });
  new vm.Script(output, { filename: bundle.output });
  outputs.push([bundle.output, output]);
}
let html = read('src/pages/home.html');
const title = values.get('SITE_CONTENT')?.document?.title;
if (typeof title === 'string') {
  const escaped = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  html = html.replace(/<title>[\s\S]*?<\/title>/i, () => '<title>' + escaped + '</title>');
}
outputs.push([manifest.entry, html]);
if (!process.argv.includes('--check')) {
  for (const [file, text] of outputs) {
    const dest = path.join(root, file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest + '.build-tmp', text);
    fs.renameSync(dest + '.build-tmp', dest);
  }
}
console.log(`${process.argv.includes('--check') ? 'Validated' : 'Built'} ${manifest.bundles.length} bundles, ${manifest.modules.length} modules, ${values.size} config files.`);
console.log('Open: ' + manifest.entry);
