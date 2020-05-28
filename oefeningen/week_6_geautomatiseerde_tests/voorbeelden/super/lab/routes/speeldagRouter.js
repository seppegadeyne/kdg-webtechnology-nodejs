/** Created by Jan de Rijke */
"use strict";
const express = require("express");
const speeldagen = require("../data/en1516");

const router = express.Router();
const datumRouter = require("./datumRouter");
const bodyParser = require("body-parser");
const url = require("url");

router.use(bodyParser.json());

const pageSize=10;
const matchdayPrefix="Matchday ";

router.param("dagNr",handleDagNr);

function handleDagNr(req,res,next,dagNr) {
  req.speeldag=speeldagen.find(
	p => p.name === `${matchdayPrefix}${req.params.dagNr}`);
  return req.speeldag ? next() : res.status(404).send();
}
router.use("/:dagNr/datum", datumRouter);

router.get("/", getSpeeldagen);
router.get("/:dagNr", (req,res) => res.send(req.speeldag.matches));
router.patch("/:dagNr", changeSpeeldagen);


function getSpeeldagen(req,res){
	let first=parseInt(req.query.first);
	if (isNaN(first)){
		first=0;
	} else{
		first--;// Het 11e element van een array zit op plaats 10
	}
	// .map functie: p => ({name:p.name}) object waarde {name:p.name} moet in () omdat de pijl
	// functie anders denkt dat het de functie body is
	res.json(speeldagen
		.slice(first,first+pageSize)
		.map(p => ({name:p.name})));
}



function changeSpeeldagen( req,res) {
  // speeldag is reeds geselecteed door param("dagNr") methode
  let matches = req.speeldag.matches;
  // ES 2018 Object rest operator. Haal team1 en team2 uit body en bewaar rest in changes
  let {team1,team2,...changes} = req.body;
  // indien team1 meegegeven werd bevat matches nu de wedstrijd van team1
  if (team1) {
	matches = matches.filter(p => p.team1 === team1);
  }
  // zelfde filter voor team2. Alleen is matches mogelijk al gefiltered op team1
  if (team2) {
	matches = matches.filter(p => p.team2 === team2);
  }
  if (matches.length != 1) {
	res.status(404).send();
	return;
  }
  let match = matches[0];
  // we voegen elk overgebleven attribuut aan de match toe
  // er wordt niet gecheckt of alleen de datum en score attributen aanwezig zijn,
  // dus als er in de patch request een fout attribuut meegegeven wordt, wordt dit ook in de data gestopt

  for (let attribute in changes){
	match[attribute]= changes[attribute]
  }
  res.json(match);
}

module.exports=router;