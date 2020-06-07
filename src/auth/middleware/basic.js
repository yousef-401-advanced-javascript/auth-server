'use strict';
const base64 = require('base-64');
const users = require('../models/users-model');





module.exports = (req, res, next)=>{
  // console.log(req.headers.authorization)
  if(!req.headers.authorization){
    next('invalid login');
  }
  else{
    const basic = req.headers.authorization.split(' ').pop(); // ["Basic","m4e321$342"]
    // console.log('basic', basic);
    const [user, pass] = base64.decode(basic).split(':'); // "mahmoud:1234"
    // console.log('__BasicAuth__', user, pass);
    users.valid(user, pass).then((validUser) => {
      console.log(validUser);
      req.token = users.token(validUser);
      next();
    })
      .catch((err) => next(err));
  }
};