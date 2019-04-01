const request = require('supertest');
const app = require('../client/src/components/App');

//  https://hackernoon.com/api-testing-using-supertest-1f830ce838f1
//  looks like an integration test

/**
 * Testing get /api/ratings/:stockID endpoint
 */
describe('GET /api/ratings/:stockID', () => {
  it('respond with json containing rating data for one stock', (done) => {
    request(app)
      .get('/api/ratings/:stockID')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/**
 * Testing get /api/history/:stockID endpoint
 */
describe('GET /api/history/:stockID', () => {
  it('respond with json containing rating data for one stock', (done) => {
    request(app)
      .get('/api/history/:stockID')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
