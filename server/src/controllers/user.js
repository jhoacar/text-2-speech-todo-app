const User = require('../models/user');

const { encryptPassword } = require('../utils/handlePassword');

module.exports.create = async (req, res) => {
  try {
    const data = req.body;

    data.password = await encryptPassword(req.body.password);

    const user = (await User.create(data)).toObject();

    return res.status(200)
      .send({
        message: 'User registered succesfully',
        body: {
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

module.exports.index = async (req, res) => {
  try {
    const users = await User.find().lean();

    return res.status(200)
      .send({
        message: 'All users registered',
        body: {
          users,
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

module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });

    return res.status(200)
      .send({
        message: 'User deleted succesfully',
        body: {
          result,
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
