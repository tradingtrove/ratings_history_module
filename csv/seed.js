const faker = require('faker');
const _ = require('lodash');


const generatePurchaseData = (symbol, name, id1, id2) => {
  let onePurchaseData = {};
  const purchaseDateRange = faker.date.between('2016-01-01', '2019-04-17');
  const purchaseDateRangeFormatted = purchaseDateRange.toLocaleDateString();
  const filledQuantity = _.random(1, 100);
  const filledPrice = _.random(1, 50);
  const totalPrice = filledQuantity * filledPrice;
  const timeInForceOptions = [
    'Day-only', 'Good-until-cancelled', 'Immediate-or-cancel',
  ];

  const purchaseData = {
    symbol,
    filled: (faker.date.between(purchaseDateRange, '2019-04-17')).toLocaleDateString(),
    id: `${id1 + 1}-${id2 + 1}`,
    enteredquantity: filledQuantity,
    filledquantityprice: filledPrice,
    filledquantityshares: filledQuantity,
    name,
    status: 'Filled',
    submitted: purchaseDateRangeFormatted,
    timeinforce: timeInForceOptions[_.random(0, 2)],
    total: totalPrice,
  };
  onePurchaseData = purchaseData;
  return onePurchaseData;
};

const generateStocksData = (symbol, id) => {
  let oneStockData = {};
  const stockData = {
    symbol,
    id: id + 1,
    recbuy: faker.random.number(20),
    rechold: faker.random.number(20),
    recsell: faker.random.number(20),
    reviewbuy: faker.lorem.paragraph(),
    reviewsell: faker.lorem.paragraph(),
  };
  oneStockData = stockData;
  return oneStockData;
};


module.exports = {
  generatePurchaseData,
  generateStocksData,
};


// const alphabet = [
//   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
// ];
// const symbols = new Set();
// const generateSymbolsAndNames = (() => {
//   while (symbols.size < 1) {
//     const symbolLength = _.random(1, 5);
//     let currSymbol = '';
//     for (let i = 0; i < symbolLength; i += 1) {
//       currSymbol += alphabet[_.random(0, 25)];
//     }
//     if (symbols.has(currSymbol) === false) {
//       symbols.add(currSymbol);
//     }
//   }
// })();
