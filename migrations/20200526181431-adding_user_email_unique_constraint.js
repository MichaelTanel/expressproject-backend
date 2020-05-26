'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'unique_name_constraint'
    })
  },

  down: (queryInterface, Sequelize) => {
  }
};