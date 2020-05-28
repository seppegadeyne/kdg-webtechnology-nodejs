const mockmathjs=require("mathjs");

test("mock math pkg", () => {
  const log = mockmathjs.log(10000, 10);
  expect(log).toBe(4);
  const sqrt = mathjs.sqrt(9);
  expect(sqrt).toBe(3);

});
