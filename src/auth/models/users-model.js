'use strict';
const dbModel = require('./user-schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET = process.env.SECRET || 'mysecret';

// console.log(dbModel);

class Models{
  constructor(){
    this.schema = dbModel;
  }
  // async hash(pass){
  //   pass = await bcrypt.hash(pass, 5);
  //   return pass;
  // }
  async token(record){
    const token =await jwt.sign({ username: record.username }, SECRET);
    console.log(token);
    return token;
  }

  async valid(username, pass){
    
    this.get(username).then(data=>{
      bcrypt.compare(pass, data[0].password).then(results=>{
        // console.log(valid);
        
        return results ? data[0] :Promise.reject('wrong password');
      });

      
    });
    
  }

  ///////========\\\\\\\\\\\

  async get(username){
    // record.password= await this.hash(record.password);
    const theIdOfObject = username ? {username} : {};
    return await this.schema.find(theIdOfObject);
  }
  async create(record){
    // record.password= await this.hash(record.password);
    return new this.schema(record).save();
  }
  update(_id, record){
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }
  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }
}
module.exports = new Models();
