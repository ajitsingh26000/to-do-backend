var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
  username: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Todo', Todo);