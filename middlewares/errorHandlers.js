const Sequelize = require('sequelize');

module.exports = async (err, req, res, next) => {
  let code = err.status || 500;

  if (err instanceof Sequelize.ValidationError) {
    code = 400;
  }

  res.status(code).send({
    message: err.message || 'server exploded =(',
  });
};
