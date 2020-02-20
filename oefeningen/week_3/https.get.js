'use strict';

const https = require('https');

https.get('https://www.google.be/', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (data) => {
        process.stdout.write(data);
    });

}).on('error', (err) => {
    console.error(err);
});
