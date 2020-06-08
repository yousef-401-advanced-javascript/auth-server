'use strict';
const base64 = require('base-64');
const users = require('../models/users-model');





module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    next('invalid login');
  }
  else {
    const basic = req.headers.authorization.split(' ').pop();
    const [user, pass] = base64.decode(basic).split(':');
    users.valid(user, pass).then((validUser) => {
      // console.log(validUser);
      req.token = users.token(validUser);
      next();
    })
      .catch((err) => next(err));
  }
};