'use strict';

const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log('Requested file: ' + req.url);
    next();
});

app.use(express.static(__dirname + '/public'));

module.exports = app;