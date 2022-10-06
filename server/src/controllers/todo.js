/* eslint-disable no-underscore-dangle */
const Todo = require('../models/todo');

module.exports.create = async (req, res) => {
  try {
    const { user } = req;
    const todo = (await Todo.create({ ...req.body, user: user?._id })).toObject();

    return res.status(200)
      .send({
        message: 'Todo saved succesfully',
        body: {
          todo,
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
    const { user } = req;
    const todos = await Todo.find({ user: user?._id }).populate('user').lean();

    return res.status(200)
      .send({
        message: "All ToDo's registered",
        body: {
          todos,
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

module.exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req;
    const todo = await Todo.findOne({ _id: id, user: user?._id }).populate('user').lean();

    return res.status(200)
      .send({
        message: "All ToDo's registered",
        body: {
          todo,
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
    const { user } = req;
    const result = await Todo.deleteOne({ _id: id, user: user?._id });

    return res.status(200)
      .send({
        message: 'Todo deleted succesfully',
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

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req;
    const result = await Todo.updateOne({ _id: id, user: user?._id }, req.body);

    return res.status(200)
      .send({
        message: 'Todo udpated succesfully',
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
