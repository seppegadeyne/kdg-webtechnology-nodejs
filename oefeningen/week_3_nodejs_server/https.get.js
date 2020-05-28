'use strict';

const https = require('https');

https.get('https://www.google.be/', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.pipe(process.stdout);
}).on('error', (err) => {
    console.error(err);
});
