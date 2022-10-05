module.exports = {
  privateKey: process.env.JWT_PRIVATE_KEY || 'key',
  expiresIn: process.env.JWT_EXPIRES_IN || 3600,
};
