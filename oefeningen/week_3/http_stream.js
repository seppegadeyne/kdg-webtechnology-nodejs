'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log('Request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    const myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('yo dudes, listening to port 3000');