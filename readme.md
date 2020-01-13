This repo is linked to Stack Overflow question: https://stackoverflow.com/questions/59709512/why-setting-webroot-to-a-correct-folder-breaks-vs-code-debugging

# How reproduce:

1. cd into the folder containing **package.json**
2. run `npm i` to download the dependencies
3. run `npm run build` to generate **app.js** inside **public** folder
4. run `npm run serve` to start the dev server serving on **http://localhost:9000/**
5. open vs code from the folder, which contains **package.json** (this impacts workspaceFolder variable)
6. in vs code, place a breakpoint on line `console.log('b')` in **index.js**
7. go to debug and click Start Debugging green icon. After a while page loads, but breakpoint is not hit (but should be)
8. in **launch.json** swap webRoot with a commented one. After a while page loads, and breakpoint is being hit (but shouldn't be)