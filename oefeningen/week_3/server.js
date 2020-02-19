const http = require('http');

const server = http.createServer(function (request, respone) {
    console.log('request was made: ' + request.url);
    respone.writeHead(200, {'Content-Type': 'text/html'});
    respone.end('<h1>Hey ninjas</h1>');
});

server.listen(3000, '127.0.0.1');
console.log('yo dudes, listening to port 3000');