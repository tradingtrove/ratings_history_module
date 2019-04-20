const fs = require('fs');
const csv = require('fast-csv');
const { generatePurchaseData, generateStocksData } = require('./seed');
// const { Stock, Purchase, db } = require('./index');


const writePurchaseData = fs.createWriteStream('./database-mongodb/csvPurchaseData.csv');
const writeStocksData = fs.createWriteStream('./database-mongodb/csvStocksData.csv');

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

csv.write(generatePurchaseData(), { headers: true })
  .pipe(writePurchaseData);

csv.write(generateStocksData(), { headers: true })
  .pipe(writeStocksData);


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
