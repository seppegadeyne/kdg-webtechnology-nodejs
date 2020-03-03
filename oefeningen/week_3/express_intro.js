'use strict';

const express = require('express');

const app = express();

app.use(function (req, res, next) {
    console.log('Requested file: ' + req.url);
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/profile/:name', function (req, res) {
    res.send('You requested to see a profile with the name of ' + req.params.name);
});

let persoon = {
    voornaam: 'Seppe',
    achternaam: "Gadeyne"
};

app.get('/api/persoon', function (req, res) {
    res.json(persoon);
});

app.listen(3000);