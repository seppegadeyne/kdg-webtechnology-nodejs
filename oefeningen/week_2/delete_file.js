const fs = require('fs');

fs.unlink('readme.txt', err => err && console.log(err));