'use strict';

const json = require('../persons');
const fs = require('fs');
const writeSub = require('./sub');

let jsonApp = function () {
    fs.mkdtemp('sub', (err, folder) => {
        if(err) return console.error(err);
        process.chdir(folder);
        json.persons.forEach((person) => {
           const cars = JSON.stringify(json.cars.filter(car => car.personId === person.id));
           writeSub(person.id, cars);
        });
    });
};

jsonApp();


