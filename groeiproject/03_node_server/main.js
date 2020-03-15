"use strict";

const persons = require("./persons");
const cars = require("./cars");

const getPersonWithCar = function (id) {
    if(persons(id)) return  {...persons(id), cars: cars(car => car.personId === id)};
};

module.exports = getPersonWithCar;