// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const client = require('../database-postgres/index');

// const app = express();
// const PORT = 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', express.static(path.join(__dirname, 'client/dist')));
// app.use('/stocks/:stockID', express.static(path.join(__dirname, 'client/dist')));

// app.get('/api/stocks/:stockID/ratings', (req, res) => {
//   const searchSymbolRatings = `SELECT * FROM stocks WHERE symbol='${req.params.stockID.toUpperCase()};`;
//   client.query(res.status(200).send(client.query(searchSymbolRatings)))
//     // .then(() => res.status(200).send(client.query(searchSymbolRatings)))
//     .then(() => console.log('Found Stocks data'))
//     .catch((err) => {
//       console.log(`ERROR getting Stock Ratings: ${err}`);
//       res.status(500).send(err);
//     });
// });

// app.get('/api/stocks/:stockID/history', (req, res) => {
//   const searchPurchaseHistory = `SELECT * FROM purchase WHERE symbol='${req.params.stockID.toUpperCase()};`;
//   client.query(res.status(200).send(client.query(searchPurchaseHistory)))
//     // .then(() => res.status(200).send(client.query(searchPurchaseHistory)))
//     .then(() => console.log('Found Purchase history'))
//     .catch((err) => {
//       console.log(`ERROR getting Stock Ratings: ${err}`);
//       res.status(500).send(err);
//     });
// });

// const server = app.listen(PORT, () => {
//   console.log(`server running at: http://localhost:${PORT}`);
// });

// module.exports = { server, app };
