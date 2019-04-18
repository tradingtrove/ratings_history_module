const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

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


module.exports = {
  Stock,
  Purchase,
};
