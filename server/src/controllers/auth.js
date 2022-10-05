const User = require('../models/user');

const { decryptPassword } = require('../utils/handlePassword');

const { getToken } = require('../utils/handleToken');

module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).lean();

    if (!user) {
      return res.status(400).json({ error: 'bad request' });
    }

    const validatedPassword = await decryptPassword(req.body.password, user.password);

    if (!validatedPassword) {
      return res.status(400).json({ error: 'bad request' });
    }

    const token = getToken({ ...user, password: undefined });

    return res.status(200)
      .send({
        message: 'User logged in succesfully',
        body: {
          token,
          user: { ...user, password: undefined },
        },
      });
  } catch (error) {
    console.log(error);

    return res.status(500)
      .send({
        errors: [{ message: error.message }],
      });
  }
};
