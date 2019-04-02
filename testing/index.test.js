const request = require('supertest');
const express = require('express');
const myApp = require('../client/src/components/App');
const Stocks = require('../database-mongodb/Stock');

const app = express();
const PORT = 3001;

//  https://hackernoon.com/api-testing-using-supertest-1f830ce838f1
//  looks like an integration test

/**
 * Testing get /api/ratings/:stockID endpoint
 */
describe('GET /api/ratings/:stockID', () => {
  it('respond with json containing rating data for one stock', (done) => {
    request(myApp)
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
    request(myApp)
      .get('/api/history/:stockID')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});


/**
 * Testing whether seed.js was successful
 */
describe('Test the removeStock method', () => {
    let stock;

    const testDBURL = 'mongodb://127.0.0.1:27017/fec_ratings';

    const testData = {
        normalStock: {
            symbol: 'TSTSTOCK',
            name: 'Test Stock', 
            recBuy: 4,
            recHold: 2,
        }
    }

    beforeAll(() => {
        mongoose.connect(testDBURL);
    });
    beforeEach(() => {
        stock = new StockModel(testData.normalStock);
        return stock.save();
    });
    afterEach(() => {
        Stocks
          .deleteOne({ symbol: 'TSTSTOCK' })
          .exec((err) => {
            if (err) {
                throw (err)
            }
          });
    });
    afterAll((done) => {
        mongoose.disconnect(done);
    });
});

describe('Seed stocks collection in fec_ratings database', () => {
  it('respond with the symbol name as a String type', (done) => {
    app.get('/api/ratings/AAPL', (req, res) => {
      Stocks
        .findOne({ symbol: 'TSTSTOCK' })
        .exec((err, data) => {
          if (err) {
            res.status(500).send(err);
            throw (err);
          }
          expect(data).toHaveProperty.(name, 'Test Stock');
          done();
          res.status(200).send(data);
        });
    });
  });
});

app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});
