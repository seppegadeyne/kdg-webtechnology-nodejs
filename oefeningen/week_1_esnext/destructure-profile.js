let json = {
	name: {
		first: "Elisabeth",
		family: "de Grote"
	},
	birth: {
		year: 1982,
		month: 12,
		day: 3
	}
};

//TODO: Your code here.
let {name: familyName, birth: birthDay} = json;

console.log(familyName);
console.log(birthDay);

