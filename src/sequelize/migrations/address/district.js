'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('district', {
      ...Columns.id_createdAt_updatedAt(3),
      provinceId: {
        allowNull: false,
        type: DataTypes.CHAR(2),
      },
      ...Columns.address_name(120),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('district');
  },
}; // Ok
