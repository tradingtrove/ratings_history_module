const request = require('supertest');
const myApp = require('../client/src/components/App');
const Stocks = require('../database-mongodb/Stock');

/**
 * Testing get /api/ratings/:stockID endpoint
 */
describe('GET /api/ratings/:stockID', () => {
  it('respond with json containing rating data for one stock', (done) => {
    request(myApp)
      .get('/api/ratings/AAPL')
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
      .get('/api/history/AAPL')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});


/**
 * Testing whether seed.js was successful
 */

//  mock database collections/tables
const testData = {
  normalStock: {
    symbol: 'TSTSTOCK',
    name: 'Test Stock',
    recBuy: 4,
    recHold: 2,
  },
  normalStock2: {
    symbol: 'TESTDENB',
    recBuy: 8,
    recHold: 3,
    recSell: 22,
    reviewBuy: `BUY After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:

    “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”
    
    After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. We will update the article with new information as the yarn unravels. 
    `,
    reviewSell: `SELL After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:
    
    “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”
    
    After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. We will update the article with new information as the yarn unravels.
    `,
  },
  normalPurchase: {
    symbol: 'TSTSTOCK',
    name: 'Test STock',
    status: 'filled',
  },
};


describe('Test the removeStock method', () => {
  beforeAll(() => { });
  beforeEach(() => {
    const stock = new Stocks(testData.normalStock);
    //  const stock = new Stocks(testData.normalStock2);
    //  const stock = new Stocks(testData.normalPurchase);
    return stock.save();
  });
  afterEach(() => {
    Stocks
      .deleteOne({ symbol: 'TSTSTOCK' })
      .exec((err) => {
        if (err) {
          throw (err);
        }
      });
  });
  afterAll((done) => { done(); });
});

describe('Seed stocks collection in fec_ratings database', () => {
  it('Should respond with data having the correct keyPath and value', (done) => {
    Stocks
      .findOne({ symbol: 'TSTSTOCK' })
      .exec((err, data) => {
        if (err) {
          throw (err);
        }
        expect(data).toHaveProperty('name', 'Test Stock');
        done();
      });
  });
});
