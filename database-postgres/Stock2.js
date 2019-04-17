const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const purchaseSchema = new mongoose.Schema({
  symbol: String,
  purchase_id: Number,
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

const Purchase = mongoose.model('Purchases', purchaseSchema);

module.exports = Purchase;
