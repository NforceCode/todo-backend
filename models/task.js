'use strict';
const { Model } = require('sequelize');
const { isBefore } = require('date-fns');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate (models) {}
  }
  Task.init(
    {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isValidDate (date) {
            if (isBefore(new Date(date), new Date())) {
              throw new RangeError('Invalid deadline date');
            }
          },
        },
      },
      isDone: {
        field: 'is_done',
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      underscored: true,
    }
  );
  return Task;
};
