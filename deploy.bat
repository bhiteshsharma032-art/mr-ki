@echo off
echo ========================================
echo   AI AUTOMATION WEBSITE DEPLOYMENT
echo ========================================
echo.

echo Step 1: Creating GitHub Repository...
echo Please go to: https://github.com/new
echo Repository name: ai-automation-website
echo Make it PUBLIC
echo Click "Create repository"
echo.

echo Step 2: Copy the repository URL and paste it here:
set /p REPO_URL="Enter your GitHub repository URL: "

echo.
echo Step 3: Pushing code to GitHub...
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
echo Step 4: Deploying to Vercel...
vercel --prod

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo Your AI automation website is now live!
echo.
pause