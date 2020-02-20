'use strict';

const fs = require('fs');
const path = require('path');

let directory = process.argv[2];
let filter = process.argv[3];

if (directory && filter) fs.readdir(directory, (error, files) => {
    if (!error) console.log(files.filter(file => path.extname(file) === '.' + filter));
});