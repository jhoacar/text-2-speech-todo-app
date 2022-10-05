const { hash, compare } = require('bcrypt');

const { saltRounds } = require('../config/bcrypt');

module.exports.encryptPassword = async (plainPassword) => hash(plainPassword, saltRounds);

// eslint-disable-next-line max-len
module.exports.decryptPassword = async (plainPassword, encryptedPassword) => compare(plainPassword, encryptedPassword);
