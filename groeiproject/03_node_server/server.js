"use strict";

const http = require("http");
const getPersonWithCar = require("./main.js");

const server = http.createServer(function (req, res) {
    const id = parseInt(req.url.slice(1));

    if(!Number.isInteger(id)) {
        res.writeHead(400, {'Content-Type': 'text'});
        res.end("Error: het opgegeven id is geen integer");
    } else if(!getPersonWithCar(id)) {
        res.writeHead(404, {'Content-Type': 'text'});
        res.end("Error: geen overeenkomstig id terug gevonden.");
    } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(getPersonWithCar(parseInt(id))));
    }
});

server.listen(3000, "localhost");