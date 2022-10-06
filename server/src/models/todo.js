const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: String,
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

const Todo = model('Todo', schema);

module.exports = Todo;
