'use strict';

const fs = require('fs');
const path = require('path');

let directory = process.argv[2];
let filter = process.argv[3];

if (directory && filter) fs.readdir(directory, (error, value) => {
    if (!error) value.forEach(value => {
        if(path.extname(value) === '.' + filter) {
            console.log(value);
        }
    });
});