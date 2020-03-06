"use strict";

const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === "/api/parsetime") {
        let time = new Date(reqUrl.query["iso"]);
        let output = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(output));
    }

    if (reqUrl.pathname === "/api/unixtime") {
        let time = Date.parse(reqUrl.query["iso"]);
        let output = {
            unixtime: time
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(output));
    }
});

server.listen(process.argv[2]);



