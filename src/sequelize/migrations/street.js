'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('street', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      wardId: {
        allowNull: false,
        type: Sequelize.CHAR(5),
      },
      ...Columns.address_name(Sequelize, 140),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('street');
  },
}; // Ok
