'use strict';

const mymodule = require('./mymodule.js');
const directory = process.argv[2];
const filter = process.argv[3];

mymodule(directory, filter, function(err, files) {
    if (err) return console.error('There was an error: ', err);
    if (files) files.forEach(file => console.log(file));
});