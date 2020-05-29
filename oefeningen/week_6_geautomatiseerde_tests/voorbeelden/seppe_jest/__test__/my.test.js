const sum = require('../');

test ('Tel twee getallen op', () => {
    expect (sum(2, 2)).toBe(4);
    expect (sum(3, 3)).toBeGreaterThan(5);
    expect (sum(1,1)).toEqual(2);
    expect (sum(1,1)).not.toBeNull();
    expect (sum(1,1)).toBeDefined();
    expect (sum(1,1)).toBeTruthy();
    //expect (sum(1,1)).toThrow();
})


let ra = [];

beforeAll(() => console.log('Doe de jest!'));
beforeEach(() => ra = [1,2,3,4]);

test ('Verwijder uit een array', () => {
    ra.pop();
    expect (ra).not.toContain(4);
    expect (ra).toHaveLength(3);
});

test ('Voeg toe aan een array', () => {
    ra.push(5);
    expect (ra).toEqual([1,2,3,4,5]);
});