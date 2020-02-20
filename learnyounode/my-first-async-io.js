'use strict';

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(error, buffer) {
    !error && console.log(buffer.split('\n').length-1);
});
