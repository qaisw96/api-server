'use strict';

// define clothes schema
const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
  name: {type: String, require: true},
  date:  { type: Date, default: Date.now },
  quantity: {type: Number, default: 0 }
});

// create model
const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;
