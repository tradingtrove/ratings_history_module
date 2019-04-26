const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg');


const pool = new Pool({
  // user: 'postgres',
  host: 'localhost',
  database: 'sdcproject',
  // password: 'password',
  // port: 3001,
});

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/:stockID', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/stocks/:stockID/ratings', (req, res) => {
  pool.query(`SELECT * FROM stocks WHERE symbol='${req.params.stockID.toUpperCase()}';`, (err, results) => {
    if (err) {
      console.log(`ERROR getting Stock Ratings: ${err}`);
      throw err;
    }
    console.log('Successfully got Stock Ratings');
    res.status(200).json(results.rows);
  });
});

app.post('/api/stocks/test/ratings', (req, res) => {
  const data = req.body[0];
  const {
    symbol, id, recbuy, rechold, recsell, reviewbuy, reviewsell,
  } = data;
  pool.query(`INSERT INTO stocks VALUES ('${symbol}', ${id}, ${recbuy}, ${rechold}, ${recsell}, '${reviewbuy}', '${reviewsell}');`, (err, results) => {
    if (err) {
      console.log(`ERROR posting to Stock Ratings: ${err}`);
      throw err;
    }
    res.status(201).send(results);
  });
});

// Sample:
// [{"symbol":"TEST","id":0,"recbuy":12,"rechold":15,"recsell":18,"reviewbuy":"test reviewbuy","reviewsell":"test reviewsell"}]

app.get('/api/stocks/:stockID/history', (req, res) => {
  pool.query(`SELECT * FROM purchase WHERE symbol='${req.params.stockID.toUpperCase()}';`, (err, results) => {
    if (err) {
      console.log(`ERROR getting Purchase History: ${err}`);
      throw err;
    }
    console.log('Successfully got Purchase History');
    res.status(200).json(results.rows);
  });
});

app.post('/api/stocks/test/history', (req, res) => {
  const data = req.body[0];
  const {
    symbol, filled, id, enteredquantity, filledquantityprice, filledquantityshares,
    name, status, submitted, timeinforce, total,
  } = data;
  pool.query(`INSERT INTO purchase VALUES ('${symbol}', '${filled}', '${id}', ${enteredquantity}, ${filledquantityprice}, ${filledquantityshares}, '${name}', '${status}', '${submitted}', '${timeinforce}', ${total});`, (err, results) => {
    if (err) {
      console.log(`ERROR posting to Stock Ratings: ${err}`);
      throw err;
    }
    res.status(201).send(results);
  });
});

// Sample:
// [{"symbol":"TEST","filled":"2017-03-30T07:00:00.000Z","id":"0","enteredquantity":3,"filledquantityprice":43,"filledquantityshares":3,"name":"Test Inc.","status":"Filled","submitted":"2016-11-11T08:00:00.000Z","timeinforce":"Good-until-cancelled","total":129}]

const server = app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };
