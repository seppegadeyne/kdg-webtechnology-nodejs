'use strict';

const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer(function (request, response) {
    console.log('Request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/html', 'Content-Encoding': 'gzip'});
    const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(zlib.createGzip()).pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('yo dudes, listening to port 3000');