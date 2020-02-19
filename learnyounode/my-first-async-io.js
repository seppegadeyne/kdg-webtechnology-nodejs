'use strict';

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, buffer) {
    !err && console.log(buffer.split('\n').length-1);
});
