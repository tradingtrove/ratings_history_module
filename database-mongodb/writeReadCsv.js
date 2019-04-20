const fs = require('fs');
const _ = require('lodash');
const { generatePurchaseData, generateStocksData } = require('./seed');
// const { Stock, Purchase, db } = require('./index');


console.time('PURCHASE');


const writePurchaseData = fs.createWriteStream('./database-mongodb/csvPurchaseData.csv');
const writeStocksData = fs.createWriteStream('./database-mongodb/csvStocksData.csv');

const header = [
  'symbol', 'name', 'timeinforce', 'submitted', 'status', 'enteredQuantity',
  'filled', 'filledQuantityShares', 'filledQuantityPrice', 'total',
];
writePurchaseData.write(`${header.join(',')}\n`);

const writeTenMillionPurchaseData = (writer, encoding, callback) => {
  let i = 1000000;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      const purchasedTimes = _.random(1, 3);
      for (let j = 0; j < purchasedTimes; j += 1) {
        const purchaseData = generatePurchaseData();
        const data = `${header.map(key => purchaseData[key]).join(',')}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeTenMillionPurchaseData(writePurchaseData, 'UTF-8', () => console.timeEnd('PURCHASE'));

// const createCsvStocksData = () => {
//   csv.write(generateStocksData(), { headers: true })
//     .pipe(writeStocksData);
// };


// const insertPurchaseData = (data) => {
//   if (Purchase.collection) {
//     db.dropCollection('purchases');
//   }
//   Purchase.create(data)
//     .then(() => db.close())
//     .catch(err => console.log(`Error saving data to database: ${err}`));
// };

// const insertStocksData = (data) => {
//   if (Stock.collection) {
//     db.dropCollection('stocks');
//   }
//   Stock.create(data)
//     .then(() => db.close())
//     .catch(err => console.log(`Error saving data to database: ${err}`));
// };

// fs.createReadStream('./database-mongodb/csvPurchaseData.csv')
//   .pipe(csv())
//   .on('data', data => insertPurchaseData(data))
//   .on('end', () => {
//     console.log('Finished seeding Purchases');
//     console.timeEnd('PURCHASE TIME');
//   });

// fs.createReadStream('./database-mongodb/csvStocksData.csv')
//   .pipe(csv())
//   .on('data', data => insertStocksData(data))
//   .on('end', () => {
//     console.log('Finished seeding Stocks');
//     console.timeEnd('STOCK TIME');
//   });
