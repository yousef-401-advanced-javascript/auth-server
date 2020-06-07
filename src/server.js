'use strict';




//first party modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();


//third party modules
// const error404 = require('./middleware/404');
// const error500 = require('./middleware/500');

//requring the routes
const router = require('./auth/router');



//for jsdocs 
// app.use('/docs', express.static('./docs'));

//middle ware 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/',router);






//errors middle ware
// app.use('*', error404);
// app.use(error500);

module.exports = {
  server : app,
  start:port=>{
    const PORT = port||3200;
    app.listen(PORT, ()=>console.log(`listeing on port ${PORT}`));
  },
};