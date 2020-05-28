'use strict'

const fs = require('fs').promises;
const original = 'sample.txt';

// Let op, callback geeft mee eerst buffer daarna error
// https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Promise
fs.readFile(original, 'utf-8').then((buffer, error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(buffer);
    }
});

let myFirstPromise = new Promise(((resolve, reject) => {
    //reject('Error testing');
    setTimeout(() => resolve('Succes!'), 2500);
}));

//myFirstPromise.then(result => console.log('Yay! ', result), error => console.error('0uch! ', error));

myFirstPromise
    .then(result => console.log('Yay! ', result))
    .catch(error => console.log('Ouch! ', error));


console.log('boe');

// Zie ook juggling-async.js voor meer Promises
// Promise.all alle resultaten komen in een array op volgorde
// Promise.race voert alle functies uit en geeft het snelste resultaat weer

const axios = require('axios');
const url = 'https://a.storyblok.com/f/84781/3840x2590/de27325f84/adobestock_247449678.jpg';

const getData = async url => {
    try {
        const response = await axios.get(url);
        console.log(response.status, response.headers, response.config);
    } catch(error) {
        console.error(error);
    }
};

getData(url);