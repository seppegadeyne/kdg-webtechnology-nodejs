'use strict';

console.log(process.argv
	.slice(2, process.argv.length)
	.reduce((accumulator, value) => accumulator + Number(value), 0)
);




