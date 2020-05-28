/** Created by Jan de Rijke */
"use strict";

var address = {
	zip: 2000,
	community: "Antwerp"
};

var herProfile = {
	name: "Elisabeth", age: 36,
	address: address
};

console.log("no stringify:\n" + herProfile);
console.log("stringify:\n", JSON.stringify(herProfile));
