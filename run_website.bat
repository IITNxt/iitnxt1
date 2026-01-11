@echo off
echo Starting IITNxt Website...
echo This window must stay open for the website to run.
echo.

:: Start the browser pointing to localhost (wait a bit for server to spin up)
timeout /t 5 >nul
start http://localhost:3000

:: Start the Next.js development server
npm run dev
