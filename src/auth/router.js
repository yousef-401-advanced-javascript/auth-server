'use strict';

const express = require('express');
const bcrypt = require('bcryptjs');
const basicAuth = require('./middleware/basic');
const Models = require('./models/users-model');
// const hash = require('./models/users-model').schema.hash;

// console.log(Models);

//create router
const router = express.Router();

//routes


router.post('/signup',postSignUpHandler);
router.post('/signin',basicAuth,postSignInHandler);
router.get('/users',basicAuth,getAllHandler);



//handlurs
async function postSignUpHandler(req, res, next) {
  // console.log(req.body);
  req.body.password = await bcrypt.hash(req.body.password, 5);
  Models.get(req.body.username).then(data=>{
    // console.log(data);
    if(!data[0]){
      Models.create(req.body)
        .then(data=>{
          const token =Models.token(data);
          // console.log(token);
          res.json({token:token, user:data});
        });
    }
    else res.send('exest');
  }).catch(next);
  
}
function postSignInHandler(req, res, next){
  // await console.log(req.token);
  res.json({ token: req.token});

}

function getAllHandler(req, res, next){
  Models.get().then(data=>res.json({data}));
}
module.exports = router;