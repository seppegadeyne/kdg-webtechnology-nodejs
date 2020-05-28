'use strict';

const https = require('https');

function httpGet(url) {
    return new Promise( function (resolve, reject) {
        https.get(url, function (res) {
            let buffer = '';
            res.on("data", data => buffer += data);
            res.on("end", () => resolve(buffer));
            res.on("error", err => reject(err));
        })
    })
}

/*
httpGet(process.argv[2]).then( function (buffer) {
        console.log(buffer);
        httpGet(process.argv[3]).then( function(buffer) {
                console.log(buffer);
                httpGet(process.argv[4]).then(function (buffer) {
                        console.log(buffer);
                })
        })
});
 */

const show = async () => {
    console.log(await httpGet(process.argv[2]));
    console.log(await httpGet(process.argv[3]));
    console.log(await httpGet(process.argv[4]));
};

//show();


httpGet('https://straffesites.be')
    .then(buffer => {
        console.log(buffer);
        return httpGet('https://google.be');
    })
    .then(buffer => {
        console.log(buffer);
        return httpGet('https://vercel.com');
    })
    .then(buffer => console.log(buffer))
    .catch(error => console.error(error));


/*
Promise.all([httpGet(process.argv[2]), httpGet(process.argv[3]), httpGet(process.argv[4])])
    .then(console.log)
    .catch(console.error);
*/

