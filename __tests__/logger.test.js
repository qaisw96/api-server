'use strict';

const server = require('../src/server');
const superTest = require('supertest');
const mockServer = superTest(server.app);


describe('bad ROUTE and METHOD check', () => {
    it('404 on a bad ROUTE', async () => {
        let res = await mockServer.get('/looooool')
        expect(res.status).toEqual(404)
    })

    it('404 on a bad method', async () => {
        let res = await mockServer.put('/food')
        expect(res.req.method).toEqual('PUT')
        expect(res.status).toEqual(404)
    })
})