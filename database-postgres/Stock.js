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

const Stock = mongoose.model('Stocks', stockSchema);

module.exports = Stock;
