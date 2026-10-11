@echo off
setlocal enabledelayedexpansion
title Project JARVIS - Portfolio Deployment Assistant
cls

:MENU
echo =====================================================================
echo           MOHAMMED SHAWEZ KHAN - PORTFOLIO DEPLOYMENT ASSISTANT
echo =====================================================================
echo.
echo  [1] 1-Click Drag-and-Drop Deploy (Netlify Drop)
echo      - Opens app.netlify.com/drop in your browser
echo      - Just drag and drop the 'static_export' folder onto the page!
echo.
echo  [2] Deploy to Vercel (Recommended for Next.js)
echo      - Runs 'npx vercel' directly from this project
echo.
echo  [3] Deploy to Netlify CLI
echo      - Runs 'npx netlify deploy --prod'
echo.
echo  [4] Preview Static Site Locally (Port 3000)
echo      - Tests your static export site before deploying
echo.
echo  [5] Rebuild Static Export (Updates static_export folder)
echo      - Recompiles all HTML/CSS/JS and 3D assets
echo.
echo  [6] Initialize Git Repository and Commit
echo      - Prepares this folder for GitHub / GitLab
echo.
echo  [7] Open Deployment Guide
echo.
echo  [0] Exit
echo.
echo =====================================================================
set /p choice="Enter your choice (0-7): "

if "%choice%"=="1" goto NETLIFY_DROP
if "%choice%"=="2" goto DEPLOY_VERCEL
if "%choice%"=="3" goto DEPLOY_NETLIFY
if "%choice%"=="4" goto PREVIEW_LOCAL
if "%choice%"=="5" goto REBUILD_EXPORT
if "%choice%"=="6" goto GIT_INIT
if "%choice%"=="7" goto OPEN_GUIDE
if "%choice%"=="0" goto EXIT

echo Invalid choice. Please try again.
pause
goto MENU

:NETLIFY_DROP
echo.
echo Opening Netlify Drop in your default browser...
start https://app.netlify.com/drop
echo.
echo INSTRUCTIONS:
echo 1. The browser window has opened to Netlify Drop.
echo 2. Open this folder in File Explorer.
echo 3. Drag the 'static_export' folder and drop it into the Netlify browser window!
echo 4. Your portfolio will be live in 10-30 seconds!
echo.
pause
goto MENU

:DEPLOY_VERCEL
echo.
echo Running Vercel deployment...
call npx.cmd vercel
echo.
pause
goto MENU

:DEPLOY_NETLIFY
echo.
echo Running Netlify deployment...
call npx.cmd netlify deploy --prod --dir=static_export
echo.
pause
goto MENU

:PREVIEW_LOCAL
echo.
echo Starting local preview server for static_export...
echo Open http://localhost:3000 in your browser when started.
echo Press Ctrl+C in the window to stop the preview server.
echo.
where npx >nul 2>nul
if %errorlevel%==0 (
    call npx.cmd serve static_export -l 3000
) else (
    python -m http.server 3000 --directory static_export
)
pause
goto MENU

:REBUILD_EXPORT
echo.
echo Rebuilding static export...
node -e "process.env.NEXT_EXPORT='true'; require('child_process').execSync('npx.cmd next build', {stdio:'inherit'})"
echo Updating static_export folder...
xcopy /E /I /Y "out" "static_export"
echo Rebuild complete!
pause
goto MENU

:GIT_INIT
echo.
echo Initializing Git repository...
git init
git add .
git commit -m "feat: production portfolio deployment setup"
echo.
echo Git initialized and initial commit created!
echo To push to your GitHub:
echo   git remote add origin https://github.com/shawez-khan/YOUR-REPO-NAME.git
echo   git branch -M main
echo   git push -u origin main
echo.
pause
goto MENU

:OPEN_GUIDE
start notepad DEPLOYMENT_GUIDE.md
goto MENU

:EXIT
exit /b 0
