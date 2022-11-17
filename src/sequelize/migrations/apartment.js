'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('apartment', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      streetId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      ...Columns.address_name(Sequelize, 255),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('apartment');
  },
}; // Ok
