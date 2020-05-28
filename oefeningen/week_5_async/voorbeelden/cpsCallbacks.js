'use strict';

const fs = require('fs');
const path = require('path');
const dir = 'mapje';

fs.mkdir(dir, err => fs.readFile('sample.txt', copyFile));

// Let op, callback geeft mee eerst error daarna buffer
function copyFile(err, buffer) {
    fs.writeFile(path.join(dir, 'kopie.txt'), buffer, err => {
        if (err) console.log(err);
    });
}
