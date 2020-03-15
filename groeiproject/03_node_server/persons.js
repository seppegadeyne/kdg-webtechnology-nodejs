"use strict";

const json = require("../persons");

const findById = function (id) {
  return json.persons.find(persoon => persoon.id === id);
};

module.exports = findById;