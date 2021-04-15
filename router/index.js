const router = require('express').Router();
const taskRouter = require('./taskRouter');
var cors = require('cors')

router.use('/tasks', taskRouter)

module.exports = router;