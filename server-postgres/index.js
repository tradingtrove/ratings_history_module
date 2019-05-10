require('newrelic');
const express = require('express');
const compression = require('compression');
const path = require('path');
const { Pool } = require('pg');

const bodyParser = require('body-parser');
// const redis = require('redis');


const pool = new Pool({
  // user: 'power_user',
  host: 'localhost',
  database: 'sdcproject',
  // password: '$poweruserpassword',
  // port: 5432,
});
// const client = redis.createClient();

const app = express();
const PORT = 3001;

app.use(compression());

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/:stockID', express.static(path.join(__dirname, '../client/dist')));

const getStocksQuery = req => pool.query(`SELECT * FROM stocks WHERE symbol='${req.params.stockID}';`);
app.get('/api/stocks/:stockID/ratings', (req, res) => {
  getStocksQuery(req)
    .then(results => res.status(200).json(results.rows))
    // .then(() => console.log('Successfully got Stocks Ratings'))
    .catch(err => res.status(400).send(err));
});

const getPurchaseQuery = req => pool.query(`SELECT * FROM purchase WHERE symbol='${req.params.stockID}';`);
app.get('/api/stocks/:stockID/history', (req, res) => {
  getPurchaseQuery(req)
    .then(results => res.status(200).json(results.rows))
    // .then(() => console.log('Successfully got Purchase History'))
    .catch(err => res.status(400).send(err));
});


// POST method for testing purpose only
const postStocksQuery = (req) => {
  const data = req.body[0];
  const {
    symbol, id, recbuy, rechold, recsell, reviewbuy, reviewsell,
  } = data;
  return pool.query(`INSERT INTO stocks VALUES ('${symbol}', ${id}, ${recbuy}, ${rechold}, ${recsell}, '${reviewbuy}', '${reviewsell}');`);
};
app.post('/api/stocks/:stockID/ratings', (req, res) => {
  postStocksQuery(req)
    .then(results => res.status(201).send(results))
    // .then(() => console.log('Successfully posted Stock Ratings'))
    .catch(err => res.status(500).send(err));
});

// Sample:
// [{"symbol":"TEST","id":0,"recbuy":12,"rechold":15,"recsell":18,"reviewbuy":"test reviewbuy","reviewsell":"test reviewsell"}]

// POST method for testing purpose only
const postPurchaseQuery = (req) => {
  const data = req.body[0];
  const {
    symbol, filled, id, enteredquantity, filledquantityprice, filledquantityshares,
    name, status, submitted, timeinforce, total,
  } = data;
  return pool.query(`INSERT INTO purchase VALUES ('${symbol}', '${filled}', '${id}', ${enteredquantity}, ${filledquantityprice}, ${filledquantityshares}, '${name}', '${status}', '${submitted}', '${timeinforce}', ${total});`);
};
app.post('/api/stocks/:stockID/history', (req, res) => {
  postPurchaseQuery(req)
    .then(results => res.status(201).send(results))
    // .then(() => console.log('Successfully posted Stock Ratings'))
    .catch(err => res.status(500).send(err));
});

// Sample:
// [{"symbol":"TEST","filled":"2017-03-30T07:00:00.000Z","id":"0","enteredquantity":3,"filledquantityprice":43,"filledquantityshares":3,"name":"Test Inc.","status":"Filled","submitted":"2016-11-11T08:00:00.000Z","timeinforce":"Good-until-cancelled","total":129}]


// PUT method for testing purpose only
const updateStocksQuery = (req) => {
  const data = req.body[0];
  const {
    symbol, id, recbuy, rechold, recsell, reviewbuy, reviewsell,
  } = data;
  return pool.query(`UPDATE stocks SET symbol='${symbol}', recbuy='${recbuy}', rechold='${rechold}',
  recsell='${recsell}', reviewbuy='${reviewbuy}', reviewsell='${reviewsell}' WHERE id='${id}';`);
};
app.put('/api/stocks/:stockID/ratings', (req, res) => {
  updateStocksQuery(req)
    .then(results => res.status(201).send(results))
    // .then(() => console.log('Successfully posted Stock Ratings'))
    .catch(err => res.status(500).send(err));
});

// PUT method for testing purpose only
const updatePurchaseQuery = (req) => {
  const data = req.body[0];
  const {
    symbol, filled, id, enteredquantity, filledquantityprice, filledquantityshares,
    name, status, submitted, timeinforce, total,
  } = data;
  return pool.query(`UPDATE purchase SET symbol='${symbol}', filled='${filled}', enteredquantity='${enteredquantity}',
  filledquantityprice='${filledquantityprice}', filledquantityshares='${filledquantityshares}', name='${name}',
  status='${status}', submitted='${submitted}', timeinforce='${timeinforce}', total='${total}', WHERE id='${id}';`);
};
app.put('/api/stocks/:stockID/history', (req, res) => {
  updatePurchaseQuery(req)
    .then(results => res.status(201).send(results))
    // .then(() => console.log('Successfully posted Stock Ratings'))
    .catch(err => res.status(500).send(err));
});


// DELETE method for testing purpose only
const deleteStocksQuery = (req) => {
  const data = req.body[0];
  const { id } = data;
  return pool.query(`DELETE FROM stocks WHERE id='${id}';`);
};
app.delete('/api/stocks/:stockID/ratings', (req, res) => {
  deleteStocksQuery(req)
    .then(results => res.status(201).send(results))
    // .then(() => console.log('Successfully posted Stock Ratings'))
    .catch(err => res.status(500).send(err));
});

// DELETE method for testing purpose only
const deletePurchaseQuery = (req) => {
  const data = req.body[0];
  const { id } = data;
  return pool.query(`DELETE purchase WHERE id='${id}';`);
};
app.delete('/api/stocks/:stockID/history', (req, res) => {
  deletePurchaseQuery(req)
    .then(results => res.status(201).send(results))
    // .then(() => console.log('Successfully posted Stock Ratings'))
    .catch(err => res.status(500).send(err));
});


const server = app.listen(PORT, () => {
  console.log(`server running at PORT: ${PORT}`);
});

module.exports = { server, app };


// Test with Redis

// // Loaderio for Stress Testing
// app.get('/loaderio-c2396facbc7b8ba163c1e2acb2fc7455', (req, res) => {
//   res.send('loaderio-c2396facbc7b8ba163c1e2acb2fc7455');
// });

// // GET from Stock Ratings with Redis
// const getStocksQuery = req => pool.query(`SELECT * FROM stocks WHERE symbol='${req.params.stockID}';`);
// app.get('/api/stocks/:stockID/ratings', (req, res) => {
//   client.get(req.params.stockID, (err, ratings) => {
//     if (err) {
//       throw err;
//     }
//     if (ratings) {
//       res.status(200).json(JSON.parse(ratings));
//     } else {
//       getStocksQuery(req)
//         .then((results) => {
//           res.status(200).json(results.rows);
//           client.set(req.params.stockID, JSON.stringify(results.rows));
//         })
//         // .then(() => console.log('Successfully got Stock Ratings'))
//         .catch(error => res.status(400).send(error));
//     }
//   });
// });

// // POST method for testing purpose only
// const postStocksQuery = (req) => {
//   const data = req.body[0];
//   const {
//     symbol, id, recbuy, rechold, recsell, reviewbuy, reviewsell,
//   } = data;
//   return pool.query(`INSERT INTO stocks VALUES ('${symbol}', ${id}, ${recbuy}, ${rechold}, ${recsell}, '${reviewbuy}', '${reviewsell}');`);
// };
// app.post('/api/stocks/test/ratings', (req, res) => {
//   postStocksQuery(req)
//     .then(results => res.status(201).send(results))
//     // .then(() => console.log('Successfully posted Stock Ratings'))
//     .catch(err => res.status(500).send(err));
// });

// // Sample:
// // [{"symbol":"TEST","id":0,"recbuy":12,"rechold":15,"recsell":18,"reviewbuy":"test reviewbuy","reviewsell":"test reviewsell"}]

// const getPurchaseQuery = req => pool.query(`SELECT * FROM purchase WHERE symbol='${req.params.stockID}';`);
// app.get('/api/stocks/:stockID/history', (req, res) => {
//   getPurchaseQuery(req)
//     .then(results => res.status(200).json(results.rows))
//     // .then(() => console.log('Successfully got Purchase History'))
//     .catch(err => res.status(400).send(err));
// });

// //GET from Purchase History with Redis
// app.get('/api/stocks/:stockID/history', (req, res) => {
//   client.get(`${req.params.stockID}_purchase`, (err, ratings) => {
//     if (err) {
//       throw err;
//     }
//     if (ratings) {
//       res.status(200).json(JSON.parse(ratings));
//     } else {
//       getPurchaseQuery(req)
//         .then((results) => {
//           res.status(200).json(results.rows);
//           client.set(`${req.params.stockID}_purchase`, JSON.stringify(results.rows));
//         })
//         // .then(() => console.log('Successfully got Stock Ratings'))
//         .catch(error => res.status(400).send(error));
//     }
//   });
// });

// // POST method for testing purpose only
// const postPurchaseQuery = (req) => {
//   const data = req.body[0];
//   const {
//     symbol, filled, id, enteredquantity, filledquantityprice, filledquantityshares,
//     name, status, submitted, timeinforce, total,
//   } = data;
//   return pool.query(`INSERT INTO purchase VALUES ('${symbol}', '${filled}', '${id}', ${enteredquantity}, ${filledquantityprice}, ${filledquantityshares}, '${name}', '${status}', '${submitted}', '${timeinforce}', ${total});`);
// };
// app.post('/api/stocks/test/history', (req, res) => {
//   postPurchaseQuery(req)
//     .then(results => res.status(201).send(results))
//     // .then(() => console.log('Successfully posted Stock Ratings'))
//     .catch(err => res.status(500).send(err));
// });

// // Sample:
// // [{"symbol":"TEST","filled":"2017-03-30T07:00:00.000Z","id":"0","enteredquantity":3,"filledquantityprice":43,"filledquantityshares":3,"name":"Test Inc.","status":"Filled","submitted":"2016-11-11T08:00:00.000Z","timeinforce":"Good-until-cancelled","total":129}]

// const server = app.listen(PORT, () => {
//   console.log(`server running at: http://localhost:${PORT}`);
// });
// // client.on('connect', (err) => {
// //   if (err) {
// //     throw err;
// //   } else {
// //     console.log('Connected to Redis');
// //   }
// // });
