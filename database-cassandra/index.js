const cassandra = require('cassandra-driver');


const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
});

const createKeyspace = `CREATE KEYSPACE IF NOT EXISTS sdcproject
  WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1}
  AND DURABLE_WRITES = true;`;

const dropStocksTable = 'DROP TABLE IF EXISTS sdcproject.stocks;';
const createStocksTable = `CREATE TABLE stocks (
  id int PRIMARY KEY,
  recbuy int,
  rechold int,
  recsell int,
  reviewbuy text,
  reviewsell text,
  symbol text,
);`;

const dropPurchaseTable = 'DROP TABLE IF EXISTS sdcproject.purchase;';
const createPurchaseTable = `CREATE TABLE purchase (
  id text PRIMARY KEY,
  enteredquantity int,
  filled date,
  filledquantityprice int,
  filledquantityshares int,
  name text,
  status text,
  submitted date,
  symbol text,
  timeinforce text,
  total int,
);`;

client.connect()
  .then(() => client.execute(createKeyspace))
  .then(() => console.log('Created keyspace'))
  .then(() => client.execute('USE sdcproject;'))
  .then(() => console.log('Using sdcproject keyspace'))
  .catch(err => console.log('ERROR connecting to Keyspace: ', err))
  .then(() => client.execute(dropStocksTable))
  .then(() => client.execute(createStocksTable))
  .then(() => console.log('Created Stocks table'))
  .catch(err => console.log('ERROR creating Stocks table: ', err))
  .then(() => client.execute(dropPurchaseTable))
  .then(() => client.execute(createPurchaseTable))
  .then(() => console.log('Created Purchase table'))
  .catch(err => console.log('ERROR creating Purchase table: ', err))
  .then(() => client.shutdown())
  .then(() => console.log('Database closed...'));
