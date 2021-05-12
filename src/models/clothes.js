'use strict';

// define clothes schema
const mongoose = require('mongoose');
const clothesSchema = mongoose.Schema({
  name: {type: String, require: true},
  made_in : {type: String, require: true},
  quantity: {type: Number, require: true},
  // made_date: {type: new Date() }
});

// create model
const clotheModel = mongoose.model('clothes', clothesSchema);
module.exports = clotheModel;
