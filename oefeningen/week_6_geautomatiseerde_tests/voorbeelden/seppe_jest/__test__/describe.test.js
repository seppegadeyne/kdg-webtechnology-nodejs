describe ('Test suite met initialisatie', () => {
    let ra;

    beforeEach(() => ra = [1, 2, 3]);

    test ('Add to array', () => {
        ra.push(4);
        expect (ra).toEqual([1,2,3,4]);
    });

    test ('Remove from array', () => {
        ra.pop();
        expect (ra).not.toContain(3);
        expect (ra).toHaveLength(2);
    });
})