'use-strict';

const net = require('net');

function getDateTime() {
    const dateTime = new Date;
    return dateTime.toISOString().slice(0, 10) + " " + dateTime.toTimeString().slice(0, 5);
}

const server = net.createServer(function (socket) {
    socket.end(getDateTime() + "\n");
});

server.listen(process.argv[2]);

