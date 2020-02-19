const fs = require('fs');

console.log(process.cwd());
process.chdir('..');
fs.readdir('.', (err, ls) => {
    err && console.log(err);
    console.log(ls);
});