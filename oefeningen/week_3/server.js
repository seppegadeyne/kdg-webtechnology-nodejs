'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer(function (request, response) {
    console.log('Request was made: ' + request.url);
    console.log('Served at: ' + request.headers.host);
    console.log('Methode: ' + request.method);
    const req_url = url.parse(request.url, true);
    console.log(`Path: ${req_url.pathname}`);
    console.log('Parameters: ' + JSON.stringify(req_url.query));
    for (let prop in req_url.query) {
        console.log(`\t${prop}=${req_url.query[prop]}`);
    }
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hey ninjas</h1>');
});

server.listen(3000, '127.0.0.1');
console.log('yo dudes, listening to port 3000');