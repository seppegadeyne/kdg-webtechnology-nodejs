'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log('Request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'application/json'});
    let myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    response.end(JSON.stringify(myObj));
});

server.listen(3001, '127.0.0.1');
console.log('yo dudes, listening to port 3000');