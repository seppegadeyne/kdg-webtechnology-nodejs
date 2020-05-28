const calc = require("./export_calc");
const dif = require("./export_calc").subtract;
const os = require("os");

console.log(process.argv);

console.log(dif(100, calc.PI));
console.log(calc.add(40, 40));

console.log(os.loadavg());
console.log(os.uptime());
console.log(os.freemem() + " / " + os.totalmem());



