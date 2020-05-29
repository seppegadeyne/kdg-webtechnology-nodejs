'use strict';

const express = require('express');
const router = express.Router();

const data = require('../data/en1516.json');
const datumRouter = require('./datumRouter');
let results = [];
let filter = false;


router.param('speeldag', (req, res, next, value) => {
    req.speeldag = data.find(item => item.name === `Matchday ${req.params.speeldag}`);
    return req.speeldag ? next() : res.status(404).send("404: Not found!");
});

router.use('/:speeldag/datum', datumRouter);

router.get('/', (req,res) => {
    let results = data.map(item => ({ name: item.name }));
    let first = 1;
    if (req.query.first) first = parseInt(req.query.first);

    res.json(results.slice(first - 1, first + 9));
});

router.get('/:speeldag', (req,res) => res.send(req.speeldag.matches));

module.exports = router;