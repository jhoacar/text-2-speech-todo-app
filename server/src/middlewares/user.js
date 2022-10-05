const { body, validationResult } = require('express-validator');

const registerValidation = async (request, response) => {
  const validations = [

    body('name').isLength({ min: 1 }),

    body('email').isEmail(),

    body('password').isLength({ min: 5 }),
  ];

  return Promise.all(validations.map((callback) => callback(request, response, () => {})));
};

module.exports.create = async (request, response, next) => {
  await registerValidation(request, response);

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  return next();
};
