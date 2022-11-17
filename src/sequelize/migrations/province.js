'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('province', {
      ...Columns.id_createdAt_updatedAt(Sequelize, 2),
      countryId: {
        allowNull: false,
        type: Sequelize.CHAR(3),
      },
      ...Columns.address_name(Sequelize, 70),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('province');
  },
}; // Ok
