const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Stock = require('./database-postgres/Stock.js');
const Purchase = require('./database-postgres/Stock2.js');


const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'client/dist')));
app.use('/stocks/:stockid', express.static(path.join(__dirname, 'client/dist')));

app.get('/api/stocks/:stockID/ratings', (req, res) => {
  Stock
    .find({ symbol: req.params.stockID.toUpperCase() })
    .exec((err, data) => {
      if (err) {
        console.log(`Error: ${err}`);
        res.status(500).send(err);
        throw (err);
      }
      res.status(200).send(data);
    });
});

app.get('/api/stocks/:stockID/history', (req, res) => {
  Purchase
    .find({ symbol: req.params.stockID.toUpperCase() })
    .exec((err, data) => {
      if (err) {
        console.log(`Error: ${err}`);
        res.status(500).send(err);
        throw (err);
      }
      res.status(200).send(data);
    });
});

const server = app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };
