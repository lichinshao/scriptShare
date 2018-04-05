const mongoose = require('mongoose');
const dbUri = require('./dbConfig.js').dbUri;
const Schema = mongoose.Schema;

mongoose.connect(dbUri);
const db = mongoose.connection;

db.on('connected', () => {
  console.log('connected to db')});

db.on('error', () => {
  console.log('error in connecting to db')
});

const user = new Schema ({

})

module.exports = {
  mongoose: mongoose
}
