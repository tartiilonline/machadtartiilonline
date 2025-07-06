#!/bin/bash

echo "🧹 Nadiifinta mashruuca Machadka Tartiiil Online..."

# Tirtir faylasha duplikaat ah: (1), (2), _copy, _backup, .bak, _old
find . -type f \( \
    -name "* (1).*" -o \
    -name "* (2).*" -o \
    -name "*_copy.*" -o \
    -name "*_backup.*" -o \
    -name "*.bak" -o \
    -name "*_old.*" \
    \) -exec rm -v {} \;

# Ka saar faylasha nidaamka: macOS / Windows
find . -type f \( -name ".DS_Store" -o -name "Thumbs.db" \) -exec rm -v {} \;

echo "✅ Faylasha aan muhiimka ahayn waa la tiray."

# Git: Add, commit, and push
echo "📦 Git commit iyo push..."
git add .
git commit -m "Nadiifin: Ka saar faylasha nuqulada iyo kuwa aan muhiimka ahayn"
git push

echo "🚀 Dhammaan isbedellada waa la git push gareeyay."
