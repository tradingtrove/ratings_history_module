const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/tt_ratingshistory';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Now connected to MongoDB called tt_ratingshistory...');
});

module.exports = db;
