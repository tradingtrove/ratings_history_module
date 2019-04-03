const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const purchaseSchema = new mongoose.Schema({
  symbol: String,
  purchase_id: Number,
  name: String,
  timeinforce: String,
  submitted: Date,
  status: String,
  entered_quantity: Number,
  filled: Date,
  filled_quantity: Number,
});

const Purchase = mongoose.model('Purchases', purchaseSchema);

module.exports = Purchase;
