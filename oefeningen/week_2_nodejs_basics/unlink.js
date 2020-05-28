const fs = require('fs');

fs.unlink('./stuff/writeme.txt', function (err) {
    fs.rmdir('stuff', err => err && console.log(err));
});
