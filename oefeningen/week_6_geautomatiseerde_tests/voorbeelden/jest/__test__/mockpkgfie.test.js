
const mathjs = require('mathjs');
mathjs.log = jest.fn().mockReturnValue(2);

// overschrijf functie met mock
//mathjs.log = jest.fn().mockReturnValue(2);
//mathjs.log = jest.fn(()  => {return 2;});

test("mock logaritme functie", () => {
  const result = mathjs.log(10000, 10);
  expect(result).toBe(2)
});
