#!/bin/bash
#rm -rf out || exit 0;
#mkdir out; 
#node build.js
cd dist
git init
git config user.name "Travis-CI"
git config user.email "travis@mccalltech.com"
#cp ../index.html ./index.html
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
