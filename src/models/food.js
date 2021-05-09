'use strict';

// define schema ==> structure data in object
const mongoose = require('mongoose');
const foodSchema = mongoose.Schema({
    name: {type: String, required: true},
    protein: {type: Number, required: true},
    category: {type: String, enum : ['FRUIT', 'VEG', 'OTHER'] }
});

// crete model 
const foodModel = mongoose.model('food', foodSchema);
module.exports = foodModel;