const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
  res.json({
    msg: 'profiles works'
  })
);

module.exports = router;
