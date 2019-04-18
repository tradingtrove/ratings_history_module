const { Stock, Purchase } = require('./database-mongodb/schema.js');


module.exports.requestStock = stockID => Stock.findOne({ symbol: stockID });
module.exports.requestPurchase = stockID => Purchase.findOne({ where: { symbol: stockID } });
