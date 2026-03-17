Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   AI AUTOMATION WEBSITE DEPLOYMENT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Creating GitHub Repository..." -ForegroundColor Yellow
Write-Host "Please go to: https://github.com/new" -ForegroundColor Green
Write-Host "Repository name: ai-automation-website" -ForegroundColor Green
Write-Host "Make it PUBLIC" -ForegroundColor Green
Write-Host "Click 'Create repository'" -ForegroundColor Green
Write-Host ""

$repoUrl = Read-Host "Step 2: Enter your GitHub repository URL"

Write-Host ""
Write-Host "Step 3: Pushing code to GitHub..." -ForegroundColor Yellow
git remote add origin $repoUrl
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "Step 4: Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "   DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "Your AI automation website is now live!" -ForegroundColor Green