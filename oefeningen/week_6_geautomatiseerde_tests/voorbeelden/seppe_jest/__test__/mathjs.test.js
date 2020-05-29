const mathjs = require('../');
//mathjs.log = jest.fn().mockReturnValue(2);
mathjs.log = jest.fn(() => 2);

test ('Mock Logaritme functie', () => {
    const result = mathjs.log(10000, 10);
    expect(result).toBe(2);
})