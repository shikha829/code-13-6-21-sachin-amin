This was the assignment for Full Stack developer.

Objective - BMI calculator
To parse the given JSON data.
According to given instruction, insert 3 more the columns in data.
Make classification according to given table.

Used express and nodemon to automatically run when changes detected.

Used async and await since according to given instruction there might be more then 1 lacs record to process
Which takes more time to process.

using async await did not stops application to stuck for waiting data.

Webpack was used to build project.
    After build output was in dist directory.
Jest was used to make the test cases.
    Only positive test cases was consider.
git was used to commit changes.

"start": "nodemon",
"build": "webpack ./index.js -o dist/main.js",
"test": "jest",
"git": "git add . && git commit -m 'hello' && git push"

Run : npm start
Build : npm run-script build
Test : npm test
