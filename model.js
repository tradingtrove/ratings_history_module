const { Stock, Purchase } = require('./database-mongodb/index.js');


module.exports.requestStock = stockID => Stock.findOne({ symbol: stockID });
module.exports.requestPurchase = stockID => Purchase.findOne({ symbol: stockID });
