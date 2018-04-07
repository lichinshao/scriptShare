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
  firstname: String,
  lastname: String,
  username: String,
  password: String
})

const snippet = new Schema ({
  id: String,
  title: String,
  description: String,
  snippet: String,
  createdBy: String,
  editable: Boolean,
  sharedWith: String
})


const User = mongoose.model('User', user);
const Snippet = mongoose.model('Snippet', snippet);
module.exports = {
  User: User,
  Snippet: Snippet,
  mongoose: mongoose,
}
