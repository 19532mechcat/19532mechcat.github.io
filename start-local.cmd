@echo off
cd /d "%~dp0"
node scripts\build.cjs
if errorlevel 1 goto fail
node scripts\serve.cjs
pause
exit /b
:fail
pause
