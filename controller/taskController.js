const { User, Task } = require('../models');
const createError = require('http-errors');


module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;

    const task = await Task.create(body);

    if (!task) {
      return next(createError(400, 'tasks not created'));
    }

    res.status(201).send({ data: task });
  } catch (err) {
    next(err);
  }
};

module.exports.getTasks = async (req, res, next) => {
  try {
    const {pagination} = req;
    const tasks = await Task.findAll({...pagination, order: ['createdAt']});

    if (!tasks.length) {
      return next(createError(404, 'tasks not found'));
    }

    res.status(200).send({ data: tasks });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const [rows, [task]] = await Task.update(body, {
      where: { id },
      returning: true,
    });

    if (rows === 0) {
      return next(createError(404, 'task not found'));
    }

    res.status(200).send({ data: task });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const { params: {id} } = req;

    const rows = await Task.destroy({ where: { id } });

    if (rows === 0) {
      return next(createError(404, 'task not found'));
    }

    res.status(200).send({ data: id });
  } catch (err) {
    next(err);
  }
};
