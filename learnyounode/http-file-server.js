"use strict";

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    const myReadStream = fs.createReadStream(process.argv[3], 'utf8');
    myReadStream.pipe(res);
});

server.listen(process.argv[2]);