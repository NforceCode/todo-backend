const taskRouter = require('express').Router();
const taskController = require('../controller/taskController');
const pagination = require('../middlewares/pagination');
taskRouter
  .route('/:id')
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

taskRouter
  .route('/')
  .post(taskController.createTask)
  .get(pagination, taskController.getTasks);


module.exports = taskRouter;