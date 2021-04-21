const router = require('express').Router();
const taskRouter = require('./taskRouter');

router.use('/tasks', taskRouter)

module.exports = router;