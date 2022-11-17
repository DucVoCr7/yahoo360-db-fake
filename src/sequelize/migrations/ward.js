'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ward', {
      ...Columns.id_createdAt_updatedAt(Sequelize, 5),
      districtId: {
        allowNull: false,
        type: Sequelize.CHAR(3),
      },
      ...Columns.address_name(Sequelize, 120),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ward');
  },
}; // Ok
