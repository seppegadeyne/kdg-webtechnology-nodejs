const mathjs = require('../');

test ('Monitor mathjs logaritme functie', () => {
    const spy = jest.spyOn(mathjs('log'));

    const result = mathjs.log(10000, 10);

    expect (spy).toHaveBeenCalledWith(1000, 10);
    expect (result).toBe(4);
})