'use strict';

const router = require("express").Router();

router.get('/:datum', (req, res) => res.send(
    req.speeldag.matches.filter(item => item.date === req.params.datum)
));

module.exports = router;