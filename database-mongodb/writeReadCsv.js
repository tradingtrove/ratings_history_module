const fs = require('fs');
const _ = require('lodash');
const faker = require('faker');
const { generatePurchaseData, generateStocksData } = require('./seed');
// const { Stock, Purchase, db } = require('./index');


const writePurchaseData = fs.createWriteStream('./database-mongodb/csvPurchaseData.csv');
const writeStocksData = fs.createWriteStream('./database-mongodb/csvStocksData.csv');

const purchaseHeader = [
  'symbol', 'name', 'timeinforce', 'submitted', 'status', 'enteredQuantity',
  'filled', 'filledQuantityShares', 'filledQuantityPrice', 'total',
];
writePurchaseData.write(`${purchaseHeader.join(',')}\n`);

const stocksHeader = [
  'symbol', 'recBuy', 'recHold', 'recSell', 'reviewBuy', 'reviewSell',
];
writeStocksData.write(`${stocksHeader.join(',')}\n`);

const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
const symbols = [];
const generateSymbols = () => {
  let word = '';
  for (let firstChar = 0; firstChar < 26; firstChar += 1) {
    for (let secondChar = 0; secondChar < 26; secondChar += 1) {
      for (let thirdChar = 0; thirdChar < 26; thirdChar += 1) {
        for (let fourthChar = 0; fourthChar < 26; fourthChar += 1) {
          for (let fifthChar = 0; fifthChar < 26; fifthChar += 1) {
            word = alphabet[firstChar] + alphabet[secondChar] + alphabet[thirdChar]
            + alphabet[fourthChar] + alphabet[fifthChar];
            symbols.push(word);
          }
        }
      }
    }
  }
};
console.time('SYMBOLS');
generateSymbols();
console.timeEnd('SYMBOLS');

const writeTenMillionPurchaseData = (writer, encoding, callback, tenMillion) => {
  const names = [];
  let i = 0;
  const write = () => {
    let ok = true;
    do {
      names.push(faker.company.companyName());
      const purchasedTimes = _.random(1, 5);
      for (let j = 0; j < purchasedTimes; j += 1) {
        const purchaseData = generatePurchaseData(symbols[i], names[i]);
        const data = `${purchaseHeader.map(key => purchaseData[key]).join(',')}\n`;
        if (i === tenMillion) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
      i += 1;
    } while (i < tenMillion && ok);
    if (i < tenMillion) {
      writer.once('drain', write);
    }
  };
  write();
};
console.time('PURCHASE');
writeTenMillionPurchaseData(writePurchaseData, 'UTF-8', () => console.timeEnd('PURCHASE'), 1000000);

const writeTenMillionStocksData = (writer, encoding, callback, tenMillion) => {
  let i = 0;
  const write = () => {
    let ok = true;
    do {
      const stocksData = generateStocksData(symbols[i]);
      const data = `${stocksHeader.map(key => stocksData[key]).join(',')}\n`;
      if (i === tenMillion) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
      i += 1;
    } while (i < tenMillion && ok);
    if (i < tenMillion) {
      writer.once('drain', write);
    }
  };
  write();
};
console.time('STOCKS');
writeTenMillionStocksData(writeStocksData, 'UTF-8', () => console.timeEnd('STOCKS'), 1000000);


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
