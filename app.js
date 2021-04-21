const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const errorHandler = require('./middlewares/errorHandlers');

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);
module.exports = app;
