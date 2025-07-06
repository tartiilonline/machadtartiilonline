@echo off
echo ===============================
echo 🚀 GitHub Pages Repo Setup Script
echo ===============================

REM Step 1: Initialize git if not already
git init

REM Step 2: Add remote if not present
git remote remove origin 2>NUL
git remote add origin https://github.com/tartiilonline/machadtartiilonline.git

REM Step 3: Set branch to main
git branch -M main

REM Step 4: Add and commit all files
git add .
git commit -m "Initial setup for GitHub Pages live site"

REM Step 5: Push to GitHub
git push -u origin main

echo.
echo ✅ Hadda tag GitHub Settings → Pages si aad u hubiso live website.
echo URL: https://tartiilonline.github.io/machadtartiilonline/
pause
