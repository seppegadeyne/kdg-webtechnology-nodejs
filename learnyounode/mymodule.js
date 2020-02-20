'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function (directory, filter, callback) {
    if (!directory) return callback('Error: missing directory argument');
    if (!filter) return callback('Error: missing filter argument');

    fs.readdir(directory, (error, files) => {
        if (error) return callback(error);
        return callback(null, files.filter(file => path.extname(file) === '.' + filter));
    });
};