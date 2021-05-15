'use strict';

// require dotenv package to import variables from .env file 
require('dotenv').config();
const server = require('./src/server');
const {PORT, MONGODB_URI} = process.env;


// start the server 
server.start(PORT, MONGODB_URI);




