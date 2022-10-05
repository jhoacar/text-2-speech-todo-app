const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: String,
  text: String,
});

const Todo = model('Todo', schema);

module.exports = Todo;
