const request = require('supertest');
const app = require('../client/src/components/App');

//  https://hackernoon.com/api-testing-using-supertest-1f830ce838f1
//  looks like an integration test

/**
 * Testing get all user endpoint
 */
describe('GET /users', () => {
  it('respond with json containing a list of all users', (done) => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
