"use strict";
let log = console.log;

// Destructureren
let name = "Joske";
let age = 40;
let profile = {
    name,
    age,
    display: function() {
        log(`${this.name} - leeftijd: ${this.age}`);
    },
    displayNew() {
        log(`${this.name} - leeftijd: ${this.age}`);
    }
};

profile.display();
profile.displayNew();

let profileOther = {
    naam: "Elisabeth",
    leeftijd: 38,
    adres: {
        postcode: 2900,
        gemeente: "Schoten"
    },
    array: [1,2,3,4,5]
};

let {naam:x, leeftijd:y} = profileOther;
log(`${x} en leeftijd = ${y}`);
let {leeftijd=18, familyName="de Grote", naam="Karel"} = profileOther;
log(`${leeftijd} - ${naam} - ${familyName}`);
let {adres:{gemeente:city}} = profileOther;
log(city);
let {array:test} = profileOther;


// Destructureren van array
let ar = ["een", "twee", "drie", "vier", "vijf"];
let [pink, ,middenvinger] = ar;
log(pink, middenvinger);

// Itereren over een array: Iterators
let fruit = ["appel", "peer", "banaan"];
let it = fruit[Symbol.iterator] ();
let el = it.next();
while (!el.done) {
    log(el.value);
    el = it.next();
}

// Arrays maken: Array.from
let letters = Array.from("iterable");
log(letters);

let arrLike = {
    length: 4,
    2: "foo"
};
log(Array.from(arrLike));

// Itereren over een array: for..of
let ar2 = ["maan", "roos", "vis"];
for (let word of ar2) {
    log(word);
}

// Itereren over een array: forEach
let tabel = ["appel", "peer"];
tabel.forEach(function (element, index, array) {
    log(element + ' ' + index + ' ' + array);
});

tabel.forEach((element) => log(element));

// Itereren over een array: map
let names = ["Groucho", "Karl", "Ingeborg"];
name = names.map(function (value) {
    return value + " Marx";
});
log(name);

// Itereren over een array: filter
name = names.filter(function (value) {
    return value.includes("a");
});
name = names.filter(value => value.includes("o"));
log(name);

let numbers = [100,20,3,40,5,15,7,8];
numbers = numbers.sort((a, b) => b - a);
log(numbers);

// Andere functies .every en .some mbt. booleaanse elementen

// Spread: ...array => elementen
let a = [2, 3, 4];
let b = [1, ...a, 5];
log(b);

function bar(y,z) {
   log(y, z);
}
bar(...[1,2]);

// Rest ...array <= elementen
function stripe(a, ...b) {
    b.forEach(value => log(value));
}
stripe(1, 2, 3, 4, 5, 6);
stripe([1, 2, 3, 4, 5], [1, 2, 2, 3, 3, 5, 4]);
stripe("Joske", "Wow", "Boe", "Lorum");

// Spread: ...object => attributen
let xProfile = { xname: "Elisabeth", age: "36" };
let xAddress = { xname: "Liza", address: { zip: 2900, community: "Schoten" } };
let xAll = {...xProfile, ...xAddress};
log(xAll);

// Rest ...object <= elementen
let {xname, ...leftover} = xAll;
log(`Name = ${xname}`);
log(leftover);