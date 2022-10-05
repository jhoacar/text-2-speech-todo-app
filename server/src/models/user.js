const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: String,
  email: String,
  password: String,
});

const User = model('User', schema);

module.exports = User;
