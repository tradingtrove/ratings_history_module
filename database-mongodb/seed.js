const faker = require('faker');
const _ = require('lodash');


const generatePurchaseData = (symbol, name) => {
  let onePurchaseData = {};
  const purchaseDateRange = faker.date.between('2019-01-01', '2019-04-17');
  const filledQuantity = faker.random.number(100);
  const filledPrice = faker.random.number(50);
  const totalPrice = filledQuantity * filledPrice;
  const timeInForceOptions = [
    'Day-only', 'Good-until-cancelled', 'Immediate-or-cancel',
  ];

  const purchaseData = {
    symbol,
    name,
    timeinforce: timeInForceOptions[_.random(0, 2)],
    submitted: purchaseDateRange,
    status: 'Filled',
    enteredQuantity: filledQuantity,
    filled: faker.date.between(purchaseDateRange, '2019-04-17'),
    filledQuantityShares: filledQuantity,
    filledQuantityPrice: filledPrice,
    total: totalPrice,
  };
  onePurchaseData = purchaseData;
  return onePurchaseData;
};

const generateStocksData = (symbol) => {
  let oneStockData = {};
  const stockData = {
    symbol,
    recBuy: faker.random.number(20),
    recHold: faker.random.number(20),
    recSell: faker.random.number(20),
    reviewBuy: faker.lorem.paragraph(),
    reviewSell: faker.lorem.paragraph(),
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
