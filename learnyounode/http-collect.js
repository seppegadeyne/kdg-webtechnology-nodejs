'use-strict';

const http = require('http');

http.get(process.argv[2], (res) => {
    let chunk = '';
    res.on('data', function (data) {
        chunk += data;
    });
   res.on('end', function () {
        console.log(chunk.length);
        console.log(chunk);

   });
}).on('error', (err) => {
    console.error(err);
});
