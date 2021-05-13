// 'use strict';

// const server = require('../src/server.js');
// const supertest = require('supertest');
// const mockServer = supertest(server.app);

// const testObj01 = {name:"strawberry", protein:2, category:"FRUIT"}
// const testObj02 = {name:"watermelon", protein:5, category:"VEG"}
// describe('SERVER TEST', () => {
//     it('Create a record using POST', async () => {
//         let resPostFood = await mockServer.send('/food').json(testObj01);

//         // test POST /food route
//         expect(resPostFood.body.record).toEqual(testObj2)
//         expect(resPostFood.status).toEqual(201)
//         // test POST /clothes route
//     })
// })