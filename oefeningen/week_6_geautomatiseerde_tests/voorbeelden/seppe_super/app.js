const express = require('express');
const personenRouter = require('./routes/restRouter');

const app = express();

app.use('/api/personen', personenRouter);

module.exports = app;
