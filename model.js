const Stock = require('./database-postgres/Stock.js');
const Purchase = require('./database-postgres/Stock2.js');


module.exports.requestStock = (stockID => Stock.findOne({ symbol: stockID }));
module.exports.requestPurchase = stockID => Purchase.findOne({ where: { symbol: stockID } });
