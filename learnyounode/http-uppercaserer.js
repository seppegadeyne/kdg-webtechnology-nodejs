"use strict";

const http = require("http");
const map = require("through2-map");

const server = http.createServer(function (req, res) {
    if (req.method !== "POST") return res.end("Send me a POST request");
    req
        .pipe(map(chunk => chunk.toString().toUpperCase()))
        .pipe(res);
});

server.listen(process.argv[2]);