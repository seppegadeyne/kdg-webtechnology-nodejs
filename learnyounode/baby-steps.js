'use strict';

let total = 0;

process.argv.forEach( (value, index) => {
	if (index > 1) total += Number(value);
});

console.log(total);
