const postgres = require('pg');


const client = new postgres.Client({
  database: 'postgres',
});

const clientDb = new postgres.Client({
  database: 'sdcproject',
});

const dropDatabase = 'DROP DATABASE IF EXISTS sdcproject';
const createDatabase = 'CREATE DATABASE sdcproject';

const dropStocksTable = 'DROP TABLE IF EXISTS stocks CASCADE;';
const createStocksTable = `CREATE TABLE stocks (
  symbol text,
  id int,
  recbuy int,
  rechold int,
  recsell int,
  reviewbuy text,
  reviewsell text,
  PRIMARY KEY (symbol)
);`;

const dropPurchaseTable = 'DROP TABLE IF EXISTS purchase;';
const createPurchaseTable = `CREATE TABLE purchase (
  symbol text,
  filled date,
  id text,
  enteredquantity int,
  filledquantityprice int,
  filledquantityshares int,
  name text,
  status text,
  submitted date,
  timeinforce text,
  total int,
  PRIMARY KEY (symbol, filled, id)
);`;

client.connect()
  .then(() => console.log('Now connected to Postgres database...'))
  .then(() => client.query(dropDatabase))
  .then(() => console.log('Dropped database'))
  .catch(err => console.log('ERROR dropping database: ', err))
  .then(() => client.query(createDatabase))
  .then(() => console.log('Created database sdcproject'))
  .catch(err => console.log('ERROR creating database: ', err))
  .then(() => client.end())
  .then(() => console.log('Database closed...'))
  .then(() => clientDb.connect())
  .then(() => console.log('Using sdcproject database'))
  .catch(err => console.log('ERROR using database: ', err))
  .then(() => clientDb.query(dropStocksTable))
  .then(() => clientDb.query(createStocksTable))
  .then(() => console.log('Created Stocks table'))
  .catch(err => console.log('ERROR creating Stocks table: ', err))
  .then(() => clientDb.query(dropPurchaseTable))
  .then(() => clientDb.query(createPurchaseTable))
  .then(() => console.log('Created Purchase table'))
  .catch(err => console.log('ERROR creating Purchase table: ', err))
  .then(() => clientDb.end())
  .then(() => console.log('Database closed...'));


module.exports = { client };
