"use strict";

const json = require("../persons");

const findBy = function(carsTest) {
    return json.cars.filter(carsTest);
};

module.exports = findBy;