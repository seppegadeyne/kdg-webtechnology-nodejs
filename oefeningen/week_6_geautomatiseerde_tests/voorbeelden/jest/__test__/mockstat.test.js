const doubleMock=jest.fn(x => 2*x);

test("array functie statistieken", () => {
  let ra=[1,2,3];
  ra.forEach(doubleMock);
// functie werd 3x aangeroepen
  expect(doubleMock).toHaveBeenCalledTimes(3);
// calls[] is een array met aantal aanroepen. calls[1] is tweede aanroep
// voor elke aanroep is er een array met parameters calls[1][0] is voor de tweede aanroep de eerste parameter
  expect(doubleMock.mock.calls[0][0]).toBe(1);
  expect(doubleMock.mock.calls[1][0]).toBe(2);
// resultaat van 3e aanroep
  expect(doubleMock.mock.results[2].value).toBe(6);
});


