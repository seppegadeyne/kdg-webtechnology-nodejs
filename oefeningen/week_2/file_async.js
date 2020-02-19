const fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data) {
    fs.writeFile('newfile.txt', data, err => err && console.log(err));
});
