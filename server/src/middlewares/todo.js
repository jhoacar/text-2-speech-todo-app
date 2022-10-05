const { body, validationResult } = require('express-validator');

const createValidation = async (request, response) => {
  const validations = [

    body('title').isLength({ min: 1 }),

    body('text').isLength({ min: 1 }),
  ];

  return Promise.all(validations.map((callback) => callback(request, response, () => {})));
};

module.exports.create = async (request, response, next) => {
  await createValidation(request, response);

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  return next();
};
