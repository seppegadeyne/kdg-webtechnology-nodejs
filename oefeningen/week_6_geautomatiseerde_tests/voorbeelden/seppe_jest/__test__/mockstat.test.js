const doubleMock = jest.fn(x => 2*x);

test ('Array functie statistieken', () => {
    let ra = [1,2,3];

    ra.forEach(doubleMock);

    expect (doubleMock).toHaveBeenCalledTimes(3);
    expect (doubleMock.mock.calls.length).toBe(3);
    expect (doubleMock.mock.calls[0][0]).toBe(1);
    expect (doubleMock.mock.calls[1][0]).toBe(2);
    expect (doubleMock.mock.results[2].value).toBe(6);
});