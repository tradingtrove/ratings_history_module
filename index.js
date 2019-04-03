const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller');
const Stock = require('./database-mongodb/Stock.js');
const Purchase = require('./database-mongodb/Stock2.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/api/ratings/:stockID', (req, res) => {
  console.log('stock ratings get');
  //controller.getStocks(req.params.stockID)
  Stock
    .findOne({ symbol: req.params.stockID })
    .exec((err, data) => {
      if (err) {
        console.log(`Error: ${err}`);
        res.status(500).send(err);
        throw (err);
      }
      res.status(200).send(data);
    });
});

app.get('/api/history/:stockID', (req, res) => {
  //controller.getPurchases(req.params.stockID)
  console.log('purchases get');
  Purchase
    .findOne({ symbol: req.params.stockID }
      .exec((err, buys) => {
        if (err) {
          console.log(`Error: could not find any past purchases, ${err}`);
          res.status(500).send();
          throw (err);
        }
        res.status(200).send(buys);
      }));
});

app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});

//  const server = app.listen
//  module.exports = { server, app };
