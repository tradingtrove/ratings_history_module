const faker = require('faker');
const _ = require('lodash');
const db = require('./index.js');
const { Stock, Purchase } = require('./schema.js');


const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
const symbols = new Set();
const names = new Set();
const generateSymbolsAndNames = (() => {
  while (symbols.size < 1) {
    const symbolLength = _.random(1, 5);
    let currSymbol = '';
    for (let i = 0; i < symbolLength; i += 1) {
      currSymbol += alphabet[_.random(0, 25)];
    }
    if (symbols.has(currSymbol) === false) {
      symbols.add(currSymbol);
      names.add(`${faker.company.companyName()} ${faker.company.companySuffix()}`);
    }
  }
})();

const generatePurchaseData = () => {
  const allPurchaseData = new Set();
  const fillsPurchaseDataProperties = (() => {
    symbols.forEach((symbol) => {
      names.forEach((name) => {
        const randomPurchaseAmount = _.random(1, 15);
        for (let i = 0; i < randomPurchaseAmount; i += 1) {
          const purchaseDateRange = faker.date.between('2016-04-17', '2019-04-17');
          const filledQuantity = faker.random.number(100);
          const filledPrice = faker.random.number(200);
          const totalPrice = filledQuantity * filledPrice;
          const timeInForceOptions = [
            'Day-only', 'Good-until-cancelled', 'Fill-or-kill', 'Immediate-or-cancel',
          ];

          const onePurchaseData = {
            symbol,
            name,
            timeinforce: timeInForceOptions[_.random(0, 3)],
            submitted: purchaseDateRange,
            status: 'Filled',
            enteredQuantity: filledQuantity,
            filled: faker.date.between(purchaseDateRange, '2019-04-17'),
            filledQuantityShares: filledQuantity,
            filledQuantityPrice: filledPrice,
            total: totalPrice,
          };
          allPurchaseData.add(onePurchaseData);
        }
      });
    });
  })();
  return Array.from(allPurchaseData);
};

const generateStocksData = () => {
  const allStocksData = new Set();
  const fillsStocksDataProperties = (() => {
    symbols.forEach((symbol) => {
      const oneStockData = {
        symbol,
        recBuy: faker.random.number(20),
        recHold: faker.random.number(20),
        recSell: faker.random.number(20),
        reviewBuy: faker.lorem.paragraph(),
        reviewSell: faker.lorem.paragraph(),
      };
      allStocksData.add(oneStockData);
    });
  })();
  return Array.from(allStocksData);
};

const insertPurchaseData = (() => {
  if (Purchase.collection) {
    db.dropCollection('purchases');
  }
  Purchase.create(generatePurchaseData())
    .then(() => db.close())
    .catch(err => console.log(`Error saving data to database: ${err}`));
})();

const insertStocksData = (() => {
  if (Stock.collection) {
    db.dropCollection('stocks');
  }
  Stock.create(generateStocksData())
    .then(() => db.close())
    .catch(err => console.log(`Error saving data to database: ${err}`));
})();

console.log(symbols);
