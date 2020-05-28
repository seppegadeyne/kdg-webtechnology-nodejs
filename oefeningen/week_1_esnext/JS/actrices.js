"use strict";
const actrices = [
	{
		naam: "Zoe Kravitz",
		geboorteJaar: 1988
	},
	{
		naam: "Cameron Diaz",
		geboorteJaar: 1972
	},
	{
		naam: "Emma Watson",
		geboorteJaar: 1990
	},
	{
		naam: "Natalie Portman",
		geboorteJaar: 1981
	},
	{
		naam: "Angelina Jolie",
		geboorteJaar: 1975
	},
	{
		naam: "Nathalie Meskens",
		geboorteJaar: 1982
	},
	{
		naam: "Reese Witherspoon",
		geboorteJaar: 1976
	},
	{
		naam: "Kirsten Dunst",
		geboorteJaar: 1982
	},
	{
		naam: "Kate Winslet",
		geboorteJaar: 1975
	},
	{
		naam: "Jennifer Lawrence",
		geboorteJaar: 1990
	},
	{
		naam: "Anne Hathaway",
		geboorteJaar: 1982
	},
	{
		naam: "Carmen Electra",
		geboorteJaar: 1972
	},
	{
		naam: "Drew Barrymore",
		geboorteJaar: 1975
	},
	{
		naam: "Julia Roberts",
		geboorteJaar: 1967
	},
	{
		naam: "Tara Reid",
		geboorteJaar: 1975
	},
	{
		naam: "Katie Holmes",
		geboorteJaar: 1978
	},
	{
		naam: "Marie Vinck",
		geboorteJaar: 1983
	}
];

function geefLeeftijd(geboortejaar) {
	return new Date().getFullYear() - geboortejaar;
}

function achternaam(naam) {
	return naam.slice(naam.indexOf(" ")+1);
}

function avg(...args) {
	let total = 0;
	args.map(value => total += value);
	return total / args.length;
}

function init() {
	console.log(geefLeeftijd(actrices[0].geboorteJaar));
	console.log(achternaam(actrices[0].naam));
	console.log("Het gemiddelde moet 5 zijn: Resultaat: " + avg(5, 8, 4, 3));
	document.querySelector("#actrices-lijst").innerHTML +=
		actrices
			.sort((a, b) => achternaam(a.naam.toUpperCase()) > achternaam(b.naam.toUpperCase()) ? 1 : -1)
			.map(value => `<tr><td>${value.naam}</td><td>${value.geboorteJaar}</td><td>${geefLeeftijd(value.geboorteJaar)}</td></tr>`)
			.join("\n");
}

addEventListener("load", init, false);
