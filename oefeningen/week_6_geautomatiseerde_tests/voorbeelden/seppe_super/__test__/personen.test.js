const request = require('supertest');
const app = require('../app');

// jest test met async callback
test ('Test de lijst van personen async', async () => {
    const res = await request(app).get('/api/personen');

    expect (res.statusCode).toBe(200);
    expect (res.body.length).toBe(3);
});

// Test op een promise
test ('Update persoon promises', () => {
    let url = '/api/personen/163361';

    return request(app).put(url).send('id=163361&naam=joske&geboortedatum=01/04/1987')
        .then(res => {
            expect (res.statusCode).toBe(200);
            return request(app).get('/api/personen/163361');
        })
        .then(res => {
            expect (res.body).toEqual({
                id: 163361,
                naam: joske,
                geboortedatum: '01/04/1987'
            });
        });
});