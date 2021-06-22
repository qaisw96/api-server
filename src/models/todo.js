'use strict';

// define clothes schema
const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
  text: {type: String, require: true},
  assignee : {type: String},
  difficulty: {type: Number},
  date:{type: String},
  complete: {type: Boolean, default: false}
  // made_date: {type: new Date() }
});

// create model
const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel;
