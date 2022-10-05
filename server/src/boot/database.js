const mongoose = require('mongoose');

const { uri } = require('../config/database');

async function connection() {
  try {
    await mongoose.connect(uri);
    console.log('Connection with mongodb established');
  } catch (error) {
    console.log(error);
    throw new Error('Failed mongodb connection: ', error.message);
  }
}

module.exports = connection;
