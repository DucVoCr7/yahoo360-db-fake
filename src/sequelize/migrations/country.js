'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('country', {
      ...Columns.id_createdAt_updatedAt(Sequelize, 3),
      name: {
        allowNull: false,
        type: Sequelize.STRING(90),
      },
      phoneId: {
        allowNull: false,
        type: Sequelize.STRING(8),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('country');
  },
}; // Ok
