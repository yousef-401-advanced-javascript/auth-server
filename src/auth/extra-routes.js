'use strict';
const express = require('express');
const bearerMiddleware = require('./middleware/bearer');

const router = express.Router();


router.get('/secret', bearerMiddleware, (req, res) => {
  res.json(req.user);
});
module.exports = router;