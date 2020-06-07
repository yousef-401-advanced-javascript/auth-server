'use strict';
const mongoose = require('mongoose');


const personalData = mongoose.Schema({
  username:{type:String, require:true},
  password:{type:String, require:true},
  // fullname:{type:String}, 
  // email:{type:String, require:true},
  // role:{type:String, enum : ['user','admin'],default: 'user'},
    
});
// console.log(personalData.methods);

module.exports = mongoose.model('Data', personalData);
// hash:personalData.methods.changedName = function() {
//   return this.name + 'TROLOLO';
// }

// {
//     "username":"awesomecoder",
//     "password":"youcantguessthis33!",
//     "fullname":"Awesome Coder",
//     "email":"awesome@coders.com"
//      role: Type: String, must be one of: admin, editor, writer, user
//   }