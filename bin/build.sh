npm install
rm -rf dist
mkdir dist
cp -R public/* dist/
NODE_ENV=production node_modules/.bin/webpack
mv assets dist/