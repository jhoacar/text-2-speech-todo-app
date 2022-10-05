const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: String,
  text: String,
}, {
  timestamps: true,
});

const Todo = model('Todo', schema);

module.exports = Todo;
