'use strict';

const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2], 'utf8');
console.log(buffer.split('\n').length-1);