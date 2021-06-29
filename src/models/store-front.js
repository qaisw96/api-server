'use strict';

// define clothes schema
const mongoose = require('mongoose');
const storeSchema = mongoose.Schema({
  name: {type: String, require: true},
  price : {type: Number},
  Image: {type: String},
  isStock:{type: String},
  category: {type: String}
  // made_date: {type: new Date() }
});

// create model
const storeModel = mongoose.model('todo', storeSchema);
module.exports = storeModel;
