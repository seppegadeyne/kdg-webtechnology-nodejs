const fs = require('fs');

fs.mkdir('stuff', function(err) {
    fs.readFile('readme.txt', 'utf8', function(err, data) {
        !err && fs.writeFile('./stuff/writeme.txt', data, err => err && console.log(err));
    })
});