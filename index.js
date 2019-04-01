const express = require('express');
const bodyParser = require('body-parser');
const Stocks = require('./database-mongodb/Stock.js');
const Purchases = require('./database-mongodb/Stock2.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/ratings/:stockID', function(req, res) {

    Stocks
      .findOne({ symbol:req.params.stockID })
        .exec( (err, data) => { 
            if (err) {
                console.log('Error:' + err);
                res.status(500).send(err);
                throw (err);
            }  
            res.status(200).send(data);
          });

});

app.get('/api/history/:symbol', function(req, res) {

  Purchases.find({ symbol:symbol })
    .limit(10)
    .sort({createdAt: -1})
    .exec( (err, buys) => { 
      if (err) {
        console.log('could not find any past purchases');
        res.status(500).send();
        throw (err);
      } 
      console.log(typeof buys);
      res.status(200).send(buys);
    });

});

app.listen(PORT, () => {
    console.log(`server running at: http://localhost:${PORT}`);
  });
