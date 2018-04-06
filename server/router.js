const express = require('express');
const router = express.Router();
const db = require('../db/dbSchemas').mongoose;
const User = require('../db/dbSchemas').User;
const Snippet = require('../db/dbSchemas').Snippet;
const bcrypt = require('bcrypt');

router.post('/api/registerUser', (req, res) => {
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
          //delete entry.password;
          let user = {
            firstname: entry.firstname,
            lastname: entry.lastname,
            username: entry.username
          }
          res.status(201).send(user);
        }
      })
    } else {
      res.send('username is already taken!');
    }
  })
});

router.get('/api/login', (req, res) => {
  let returningUser = req.query;
  User.findOne({username: returningUser.username}, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.status(200).send('user DNE')
    } else if (bcrypt.compareSync(returningUser.password, user.password)) {
      //delete user.password;
      let signedUser = {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username
      }
      res.status(200).send(signedUser);
    } else {
      res.status(200).send('incorrect password');
    }
  })
})


module.exports = router;