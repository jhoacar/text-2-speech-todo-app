const { body, validationResult } = require('express-validator');
const { validateToken } = require('../utils/handleToken');

const loginValidation = async (req, res) => {
  const validations = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ];
  return Promise.all(validations.map((callback) => callback(req, res, () => {})));
};

module.exports.login = async (req, res, nxt) => {
  await loginValidation(req, res);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return nxt();
};

module.exports.auth = async (req, res, nxt) => {
  try {
    const jwt = req.headers.authorization;

    if (!jwt) {
      return res.status(400).json({ errors: ['Token is required'] });
    }

    req.user = validateToken(jwt);

    if (!req.user) {
      return res.status(400).json({ errors: ['Token invalid'] });
    }

    return nxt();
  } catch (error) {
    return res.status(400).json({ errors: [{ message: error.message }] });
  }
};
