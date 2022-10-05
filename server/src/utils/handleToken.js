const { sign, verify } = require('jsonwebtoken');
const { privateKey, expiresIn } = require('../config/jwt');

module.exports.getToken = (payload) => sign(payload, privateKey, {
  expiresIn,
});

module.exports.validateToken = (token) => verify(token, privateKey);
