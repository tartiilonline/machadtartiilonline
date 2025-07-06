@echo off
echo ===============================
echo 🗑️ Tirtiridda Index-yada Aan Loo Baahnayn
echo ===============================

REM Remove unnecessary index files
git rm index-old.html
git rm index-darkmode.html
git rm index-v2.html

REM Commit the deletion
git commit -m "Remove redundant index files"

REM Push to GitHub
git push origin main

echo.
echo ✅ Faylasha aan loo baahnayn waa la tirtiray oo waa la push-gareeyay!
pause
