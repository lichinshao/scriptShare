const express = require('express');
const router = express.Router();
const db = require('../db/dbSchemas').mongoose;
const User = require('../db/dbSchemas').User;
const Snippet = require('../db/dbSchemas').Snippet;
const bcrypt = require('bcrypt');

router.post('/api/registerUser', (req, res) => {
  console.log('req.body', req.body)
  let newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username
  };
  User.findOne({username: newUser.username}, (err, user) => {
    if (err) {throw err};
    if (!user) {
      let pwd = req.body.password;
      let salt = bcrypt.genSaltSync(10);
      let hashSalt = bcrypt.hashSync(pwd, salt);
      newUser.password = hashSalt;
      User.create(newUser, (err, entry) => {
        if (err) {throw err};
        if (entry) {
          let regUser = {
            firstname: entry.firstname,
            lastname: entry.lastname,
            username: entry.username,
            id: entry._id
          }
          res.status(201).send(regUser);
          //res.statusCode(201).send(entry)
        }
      })
    } else {
      console.log('username is already taken!')
      res.send('username is already taken!');
    }
  })
})

module.exports = router;