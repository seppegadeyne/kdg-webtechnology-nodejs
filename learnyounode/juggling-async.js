'use strict';

const http = require('http');

function httpGet(url) {
    return new Promise( function (resolve, reject) {
        http.get(url, function (res) {
            let buffer = '';
            res.on("data", data => buffer += data);
            res.on("end", () => resolve(buffer));
            res.on("error", err => reject(err));
        })
    })
}

httpGet(process.argv[2]).then( function (buffer) {
        console.log(buffer);
        httpGet(process.argv[3]).then( function(buffer) {
                console.log(buffer);
                httpGet(process.argv[4]).then(function (buffer) {
                        console.log(buffer);
                })
        })
});

