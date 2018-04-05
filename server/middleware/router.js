const express = require('express');
const router = express.Router();

router.post('/api/registerUser', (req, res) => {
  console.log('req.body', req.body)
})

module.exports = router;