let examenDefaults = {
  tijd: 120,
  campus: "Groenplaats",
  vorm:"schriftelijk",
  hulpmiddelen:"geen"
}

let ui2={
  naam:"Web Technologie 1",
  vorm:"laptop"
}
let SE2P5={
  naam:"Software Engineering 2, 2e Zit",
  tijd:180
}

console.log({...examenDefaults, ...ui2});
console.log({...examenDefaults, ...SE2P5});

// { tijd: 120,
//   campus: 'Groenplaats',
//   vorm: 'laptop',
//   hulpmiddelen: 'geen',
//   naam: 'Web Technologie 1' }
// { tijd: 180,
//   campus: 'groenplaats',
//   vorm: 'schriftelijk',
//   hulpmiddelen: 'geen',
//   naam: 'Software Engineering 2, 2e Zit' }