const http=require('node:http'), fs=require('node:fs'), path=require('node:path');
const root=path.resolve(__dirname,'..');
const port=Number(process.env.PORT||8080);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.ico':'image/x-icon','.woff2':'font/woff2','.ttf':'font/ttf','.mp3':'audio/mpeg','.m4a':'audio/mp4','.mp4':'video/mp4','.wav':'audio/wav','.m3u8':'application/vnd.apple.mpegurl'};
http.createServer((req,res)=>{
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);return res.end();}
 if(pathname==='/'){res.writeHead(302,{Location:'/19532main/resourses/index.html'});return res.end();}
 let target=path.resolve(root,'.'+pathname);
 if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
 try{if(fs.statSync(target).isDirectory())target=path.join(target,'index.html');const st=fs.statSync(target);if(!st.isFile())throw Error();const mime=types[path.extname(target).toLowerCase()]||'application/octet-stream';
 let start=0,end=st.size-1,status=200;const range=req.headers.range;
 if(range){const m=/^bytes=(\d*)-(\d*)$/.exec(range);if(!m||(!m[1]&&!m[2])){res.writeHead(416,{'Content-Range':`bytes */${st.size}`});return res.end();}if(m[1]){start=Number(m[1]);end=m[2]?Math.min(Number(m[2]),end):end;}else start=Math.max(0,st.size-Number(m[2]));if(start>end||start>=st.size){res.writeHead(416,{'Content-Range':`bytes */${st.size}`});return res.end();}status=206;}
 const headers={'Content-Type':mime,'Content-Length':Math.max(0,end-start+1),'Cache-Control':'no-cache','Accept-Ranges':'bytes'};if(status===206)headers['Content-Range']=`bytes ${start}-${end}/${st.size}`;res.writeHead(status,headers);if(req.method==='HEAD'||st.size===0)return res.end();const stream=fs.createReadStream(target,{start,end});stream.on('error',()=>res.destroy());stream.pipe(res);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('File not included: '+pathname);}
}).listen(port,'127.0.0.1',()=>console.log(`Open http://127.0.0.1:${port}/`));
