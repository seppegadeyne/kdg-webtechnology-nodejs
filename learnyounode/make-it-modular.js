'use strict';

const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, files) {
    if (err) return console.error('There was an error: ', err);
    if (files) files.forEach(file => console.log(file));
});