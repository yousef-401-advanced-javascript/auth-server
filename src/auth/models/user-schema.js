'use strict';
const mongoose = require('mongoose');


const personalData = mongoose.Schema({
  username:{type:String, require:true},
  password:{type:String, require:true},

});


module.exports = mongoose.model('Data', personalData);
