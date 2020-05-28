const sum = require("../");
test("2 getallen optellen", () => {
	expect(sum(1, 2))
	  .toBe(3);
  }
)

test("meer optel tests", () => {
  expect(sum(1, 2)).not.toBe(4);
  expect(sum(1, 2)).toBeGreaterThan(2);
})


test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
