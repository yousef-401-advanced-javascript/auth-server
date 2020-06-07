'use strict';

require('dotenv').config();
const server = require('./src/server');
const mongoos = require('mongoose');



mongoos.connect(process.env.MONGODB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
});
server.start(process.env.PORT);