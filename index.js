const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Stock = require('./database-mongodb/Stock.js');
const Purchase = require('./database-mongodb/Stock2.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/stocks/:stockid', express.static(path.join(__dirname, 'client/dist')));

app.get('/api/ratings', (req, res) => {
  Stock.find({})
    .exec((err, stockRatings) => { 
      if (err) {
        res.status(500).send('could not find any expert ratings of stocks');
        throw (err);
      }
      res.status(200).send(stockRatings);
    });
});

app.get('/api/ratings/:stockID', (req, res) => {
  Stock
    .find({ symbol: req.params.stockID.toUpperCase() })
    .exec((err, data) => {
      if (err) {
        console.log(`Error: ${err}`);
        res.status(500).send(err);
        throw (err);
      }
      console.log('Ratings find');
      console.log('/api/rating/stockid', req.params.stockID, data[0]);
      res.status(200).send(data);
    });
});

app.get('/api/history/:stockID', (req, res) => {
  Purchase
    .find({ symbol: req.params.stockID.toUpperCase() })
    .exec((err, data) => {
      if (err) {
        console.log(`Error: ${err}`);
        res.status(500).send(err);
        throw (err);
      }
      console.log('no error');
      console.log('api/history/stockID', req.params.stockID, data);
      res.status(200).send(data);
    });
});

const server = app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };
