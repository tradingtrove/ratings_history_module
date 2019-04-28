require('newrelic');
const express = require('express');
const compression = require('compression');
const path = require('path');
// const bodyParser = require('body-parser');
const { Pool } = require('pg');
const redis = require('redis');


const pool = new Pool({
  // user: 'postgres',
  host: 'localhost',
  database: 'sdcproject',
  // password: 'password',
  // port: 3001,
});
const client = redis.createClient();

const app = express();
const PORT = 3005;

app.use(compression());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/:stockID', express.static(path.join(__dirname, '../client/dist')));


const getStocksQuery = req => pool.query(`SELECT * FROM stocks WHERE symbol='${req.params.stockID}';`);
app.get('/api/stocks/:stockID/ratings', (req, res) => {
  client.get(req.params.stockID, (err, ratings) => {
    if (err) {
      throw err;
    }
    if (ratings) {
      res.status(200).json(JSON.parse(ratings));
    } else {
      getStocksQuery(req)
        .then((results) => {
          res.status(200).json(results.rows);
          client.set(req.params.stockID, JSON.stringify(results.rows));
        })
        // .then(() => console.log('Successfully got Stock Ratings'))
        .catch(error => res.status(400).send(error));
    }
  });
});

const postStocksQuery = (req) => {
  const data = req.body[0];
  const {
    symbol, id, recbuy, rechold, recsell, reviewbuy, reviewsell,
  } = data;
  return pool.query(`INSERT INTO stocks VALUES ('${symbol}', ${id}, ${recbuy}, ${rechold}, ${recsell}, '${reviewbuy}', '${reviewsell}');`);
};
app.post('/api/stocks/test/ratings', (req, res) => {
  postStocksQuery(req)
    .then(results => res.status(201).send(results))
    // .then(() => console.log('Successfully posted Stock Ratings'))
    .catch(err => res.status(500).send(err));
});

// Sample:
// [{"symbol":"TEST","id":0,"recbuy":12,"rechold":15,"recsell":18,"reviewbuy":"test reviewbuy","reviewsell":"test reviewsell"}]

const getPurchaseQuery = req => pool.query(`SELECT * FROM purchase WHERE symbol='${req.params.stockID}';`);
// app.get('/api/stocks/:stockID/history', (req, res) => {
//   getPurchaseQuery(req)
//     .then(results => res.status(200).json(results.rows))
//     // .then(() => console.log('Successfully got Purchase History'))
//     .catch(err => res.status(400).send(err));
// });

app.get('/api/stocks/:stockID/history', (req, res) => {
  client.get(req.params.stockID, (err, ratings) => {
    if (err) {
      throw err;
    }
    if (ratings) {
      res.status(200).json(JSON.parse(ratings));
    } else {
      getPurchaseQuery(req)
        .then((results) => {
          res.status(200).json(results.rows);
          client.set(req.params.stockID, JSON.stringify(results.rows));
        })
        // .then(() => console.log('Successfully got Stock Ratings'))
        .catch(error => res.status(400).send(error));
    }
  });
});

const postPurchaseQuery = (req) => {
  const data = req.body[0];
  const {
    symbol, filled, id, enteredquantity, filledquantityprice, filledquantityshares,
    name, status, submitted, timeinforce, total,
  } = data;
  return pool.query(`INSERT INTO purchase VALUES ('${symbol}', '${filled}', '${id}', ${enteredquantity}, ${filledquantityprice}, ${filledquantityshares}, '${name}', '${status}', '${submitted}', '${timeinforce}', ${total});`);
};
app.post('/api/stocks/test/history', (req, res) => {
  postPurchaseQuery(req)
    .then(results => res.status(201).send(results))
    // .then(() => console.log('Successfully posted Stock Ratings'))
    .catch(err => res.status(500).send(err));
});

// Sample:
// [{"symbol":"TEST","filled":"2017-03-30T07:00:00.000Z","id":"0","enteredquantity":3,"filledquantityprice":43,"filledquantityshares":3,"name":"Test Inc.","status":"Filled","submitted":"2016-11-11T08:00:00.000Z","timeinforce":"Good-until-cancelled","total":129}]

const server = app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };


// app.get('/api/stocks/:stockID/ratings', (req, res) => {
//   pool.query(`SELECT * FROM stocks WHERE symbol='${req.params.stockID.toUpperCase()}';`, (err, results) => {
//     if (err) {
//       // console.log(`ERROR getting Stock Ratings: ${err}`);
//       throw err;
//     }
//     // console.log('Successfully got Stock Ratings');
//     res.status(200).json(results.rows);
//   });
// });

// app.post('/api/stocks/test/ratings', (req, res) => {
//   const data = req.body[0];
//   const {
//     symbol, id, recbuy, rechold, recsell, reviewbuy, reviewsell,
//   } = data;
//   pool.query(`INSERT INTO stocks VALUES ('${symbol}', ${id}, ${recbuy}, ${rechold}, ${recsell}, '${reviewbuy}', '${reviewsell}');`, (err, results) => {
//     if (err) {
//       // console.log(`ERROR posting to Stock Ratings: ${err}`);
//       throw err;
//     }
//     res.status(201).send(results);
//   });
// });

// app.get('/api/stocks/:stockID/history', (req, res) => {
//   pool.query(`SELECT * FROM purchase WHERE symbol='${req.params.stockID.toUpperCase()}';`, (err, results) => {
//     if (err) {
//       // console.log(`ERROR getting Purchase History: ${err}`);
//       throw err;
//     }
//     // console.log('Successfully got Purchase History');
//     res.status(200).json(results.rows);
//   });
// });

// app.post('/api/stocks/test/history', (req, res) => {
//   const data = req.body[0];
//   const {
//     symbol, filled, id, enteredquantity, filledquantityprice, filledquantityshares,
//     name, status, submitted, timeinforce, total,
//   } = data;
//   pool.query(`INSERT INTO purchase VALUES ('${symbol}', '${filled}', '${id}', ${enteredquantity}, ${filledquantityprice}, ${filledquantityshares}, '${name}', '${status}', '${submitted}', '${timeinforce}', ${total});`, (err, results) => {
//     if (err) {
//       // console.log(`ERROR posting to Purchases History: ${err}`);
//       throw err;
//     }
//     res.status(201).send(results);
//   });
// });
