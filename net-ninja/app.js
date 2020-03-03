'use strict';
//TUT.26
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/profile/:name', function (req, res) {
    let data = { age: 29, job: 'ninja'};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);