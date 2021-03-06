'use strict';

// define clothes schema
const mongoose = require('mongoose');
const storeSchema = mongoose.Schema({
  name: {type: String, require: true},
  price : {type: Number},
  Image: {type: String},
  isStock:{type: Number},
  category: {type: String}
  // made_date: {type: new Date() }
});

// create model
const storeModel = mongoose.model('store', storeSchema);
module.exports = storeModel;
