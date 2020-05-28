'use strict';

const express = require('express');
const speeldagen = require('./routes/speeldagRouter');
const morgan = require('morgan');

const app = express();

app.listen(3000);

app.use(morgan('combined'));

app.use('/api/speeldagen', speeldagen);

app.get('*', (req, res) => {
    console.log('catch-all activated');
    res.send("Je bent in de catch-all terecht gekomen!");
});

