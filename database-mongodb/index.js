const mongoose = require('mongoose');


const mongoUri = 'mongodb://localhost/tt_ratingshistory';
mongoose.connect(mongoUri, { useNewUrlParser: true });

const stockSchema = new mongoose.Schema({
  symbol: String,
  recBuy: Number,
  recHold: Number,
  recSell: Number,
  reviewBuy: String,
  reviewSell: String,
});

const purchaseSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  timeinforce: String,
  submitted: Date,
  status: String,
  enteredQuantity: Number,
  filled: Date,
  filledQuantityShares: Number,
  filledQuantityPrice: Number,
  total: Number,
});

const Stock = mongoose.model('Stocks', stockSchema);
const Purchase = mongoose.model('Purchases', purchaseSchema);

const db = mongoose.connection;
db.once('open', () => {
  console.log('Now connected to MongoDB called tt_ratingshistory...');
});

module.exports = {
  Stock,
  Purchase,
  db,
};
