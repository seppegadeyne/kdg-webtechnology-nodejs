'use-strict';

import './css/style1.css';
import './css/style2.css';

import * as stuff from './js/_hi';
stuff.hello2();
let name = new stuff.Person('Seppe');
console.log(name.name);

let comp = require('./js/_calc');

console.log(comp.add('100','200'), comp.div(20,2), comp.PI);
console.log('boe2');

document.querySelector('h1').textContent = 'Hallo mannekes alles goed?';

setTimeout(() => {
    document.querySelector('h1').textContent = 'Ja alles goed danku!!!';
}, 1000);

setTimeout(() => {
    document.querySelector('h1').textContent = stuff.LORUM;
}, 2000);

setTimeout(() => {
    document.querySelector('h1').textContent = name.name;
}, 3000);

// Other import options
import {Person} from './js/_hi';
console.log(new Person('Jan').name);

import {hello2, LORUM as something} from "./js/_hi";
console.log('Humble ' + something);

import banaan from './js/_hi';
banaan();

import vijg, * as mixed from './js/_hi';
vijg();
console.log(mixed.LORUM);