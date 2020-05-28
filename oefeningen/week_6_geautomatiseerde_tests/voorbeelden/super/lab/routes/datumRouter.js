/** Created by Jan de Rijke */
"use strict";

const router = require("express").Router();

	router.get("/:matchDate", (req,res) => res.send(req.speeldag.matches.filter(
		p=> p.date === req.params.matchDate)));



module.exports = router;