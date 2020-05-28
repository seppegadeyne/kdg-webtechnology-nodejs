let ra;

beforeAll(() => {console.log("Doe de jest!")});

beforeEach(() => {  ra=[1,2,3];});


test("add to array", () => {
  ra.push(4);
  // vergelijk ELK VELD van object/array
  // werkt niet met toBe()
  expect(ra).toEqual([1, 2, 3,4]);
});

test("remove from array", () => {
  ra.pop();
  expect(ra).not.toContain(3);
  expect(ra).toHaveLength(2);
});