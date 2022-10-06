const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: String,
  email: String,
  password: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
}, {
  timestamps: true,
});

const User = model('User', schema);

module.exports = User;
