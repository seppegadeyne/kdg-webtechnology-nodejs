const request = require('supertest');
const app = require('../app');

describe('Test data matchen', () => {
    test ('GET speeldagen datum', async () => {
        const res = await request(app).get('/api/speeldagen/4/datum/2015-08-30');

        expect (res.statusCode).toBe(200);
    })
});