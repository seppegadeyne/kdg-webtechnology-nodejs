"use strict";
const { v5: uuid5 } = require('uuid');
const router = require("express").Router();
const data = require("../../data/db.json");

// TODO opdracht 1 stap 2.1
//   haal de lijst met (hoofd)entiteiten uit data
const developers = data.developers;

// TODO opdracht 1 stap 3.1
//  Zorg ervoor dat de JSON request body behandeld wordt
// zie naar de middleware toegevoegd in app.js onder vraag 1.1
// app.use(express.json()); heb ik daar toegevoegd.

// TODO opdracht 1 stap 2.2
//   schrijf hier een methode die  GET requests /<naam_hoofdeentiteit>/<id_entiteit behandelt
//           je geeft de gevraagde entiteit terug aan de client
let results = [];

router.get('/:id', (req,res) => {
	results = developers.filter(value => parseInt(value.id) === parseInt(req.params.id));

	if (results.length > 0) {
		res.json(results);
	} else {
		res.status(404);
		res.send("404: Record not found");
	}
});



// roep deze functie van uit je PATCH handler (zie verder)
// mee te geven parameters
// 	  - original: het bestaande object dat moet veranderd worden (uit entiteiten)
//    - modifier: het  object met veranderingen ontvangen  in de PATCH request
// de functie haalt de attribuut waarden uit het modifier object
// en zet ze in de overeenkomstige attributen in het original object
// de functie voegt ook een (steeds verschillend) transactie cijfer (uuid) toe
// je moet verder niets met de uuid doen
function merge(original,modifier){
	for (let attribute in modifier){
		original[attribute]= modifier[attribute]
	}
	// elke aanpassing krijgt een uniek transactie nummer (uuid)
	//original.uuid = uuid5(Date.now().toString(),'94bd0f10-54cb-4571-9a6a-f8a74dcd5e')
	return original
}


// TODO 1.3.2: schrijf een methode die PATCH requests /<naam_hoofdeentiteit>/<id_entiteit behandelt
//           je mag de merge functie gebruiken om de entry in entiteiten aan te passen
router.patch('/:id', (req,res) => {
	results = developers.filter(value => parseInt(value.id) === parseInt(req.params.id));

	if(results.length === 1) {
		let developer = {...results[0], ...req.body};
		// Die merge functie begrijp ik niet goed welke waarden hierin moeten komen.
		// Zie developer object met nieuwe waarden.
		res.status(200);
		res.json(merge(results[0], req.body));
	} else {
		res.status(404);
		res.send("404: Record not found");
	}
});



module.exports=router;
