'use strict';

const json = require('../persons');
const fs = require('fs');

function writeSub(personId, cars) {
    if (!personId || !cars) return console.error("Error: no arguments for writeSub();");

    const person = json.persons.filter(person => person.id === personId);
    let filename = null;
    if (person[0].first_name) filename = `${person[0].first_name}_`;
    if (person[0].last_name) filename += `${person[0].last_name}_`;
    filename += `${person[0].id}.json`;

    fs.writeFile(filename, cars, (err) => err && console.error(err));
}

module.exports = writeSub;