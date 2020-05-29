const request = require('supertest');
const app = require('../app');

describe('Test speeldagen', () => {
    test ('GET speeldagen', async () => {
        const res = await request(app).get('/api/speeldagen');

        expect (res.statusCode).toBe(200);
        expect (res.body.length).toBe(10);
    });

    test ('GET speeldag matchen', async () => {
        const res = await request(app).get('/api/speeldagen/4');

        expect (res.body[0].date).toBe('2015-08-29');
    })

    test ('GET onbestaande speeldag', async () => {
        const res = await request(app).get('/api/speeldagen/0');

        expect (res.statusCode).toBe(404);
    })
});
