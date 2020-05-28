/** Created by Jan de Rijke */
"use strict";

var burton = {
	name: "Richard",
	age: 43
};

var taylor = {
	name: "Elisabeth",
	age: 36,
	marriedTo: burton
};
burton.marriedTo = taylor;

console.log(burton);
var util=require("util");
console.log(JSON.stringify(util.inspect(burton)));

