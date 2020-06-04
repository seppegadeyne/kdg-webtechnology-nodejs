'use-strict';

let money = require('money-math');

const add = (x,y) => money.add(x,y);
const sub = (x,y) => money.subtract(x,y);
const div = (x,y) => x / y;
const PI = '3.14';

console.log('run money module exports');

module.exports = {add, sub, div, PI};