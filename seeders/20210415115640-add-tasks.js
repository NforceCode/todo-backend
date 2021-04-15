'use strict';

const { Op } = require('sequelize');

const seededTasks = new Array(20).fill(null).map((task, index) => ({
  body: `Task ${index}`,
  created_at: new Date(),
  updated_at: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tasks', seededTasks, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'tasks',
      { body: { [Op.in]: seededTasks.map(task => task.body) } },
      {}
    );
  },
};
