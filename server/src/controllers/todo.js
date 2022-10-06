const Todo = require('../models/todo');

module.exports.create = async (req, res) => {
  try {
    const todo = (await Todo.create(req.body)).toObject();

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
    const todos = await Todo.find().lean();

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

module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.deleteOne({ _id: id });

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
    const result = await Todo.updateOne({ _id: id }, req.body);

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
