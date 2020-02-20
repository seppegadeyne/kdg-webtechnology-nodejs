'use strict';

const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(error, files) {
    if (error) return console.error('There was an error: ', error);
    if (files) files.forEach(file => console.log(file));
});