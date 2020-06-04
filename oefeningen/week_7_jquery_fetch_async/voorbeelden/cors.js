'use strict';

const express = require('express');

// CORS aan de hand van middleware cors
const cors = require('cors');
const app = express();

// Sta alles toe
app.options('/api', cors());
app.use('/api', cors({'exposeHeaders': 'Location'}));

// Selectief voor pagina's van specifieke servers
app.options('/api', cors());
app.use('/api', cors({
    'exposeHeaders': 'Location',
    'origin': 'http://www.kdg.be:8080'
}));

// CORS manueel
const cors = function (req, res, next) {
    res.headers('Access-Control-Allow-Origin', 'http://www.kdg.be');
    res.headers('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    res.headers('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
    res.headers('Access-Control-Expose-Headers', 'Location');
    next();
}
app.use('/api', cors);