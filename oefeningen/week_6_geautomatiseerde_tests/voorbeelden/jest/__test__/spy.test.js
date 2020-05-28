const mathjs = require('mathjs');

test("monitor mathjs logaritme functie", () => {
  const spy = jest.spyOn(mathjs, 'log');
  const result = mathjs.log(10000, 10);

  expect(spy).toHaveBeenCalledWith(10000, 10);
  expect(result).toBe(4)
});
