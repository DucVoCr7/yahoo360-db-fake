'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('district', {
      ...Columns.id_createdAt_updatedAt(Sequelize, 3),
      provinceId: {
        allowNull: false,
        type: Sequelize.CHAR(2),
      },
      ...Columns.address_name(Sequelize, 100),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('district');
  },
}; // Ok
