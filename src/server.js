
'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


const mongoose = require('mongoose');
// require error-handlers
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
app.use(express.json());

// require router page
const routePage = require('./routers/food');
const router = routePage.router;

app.use(routePage.checkRoute);

// middleware to shift between routes depend on client request
app.use('/food', router);
app.use('/clothes', router);
app.use('/todo', router);

// error handlers middleware
app.use('*', notFoundHandler);
app.use(errorHandler);

// listening function
function start(port, MONGODB_URI) {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => {
    app.listen(port, () => console.log(`Listening To PORT ${port} ...`));
    console.log('CONNECTED TO DB');
  });
}

module.exports = {
  start,
  app
};
