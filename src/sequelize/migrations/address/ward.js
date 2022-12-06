'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ward', {
      ...Columns.id_createdAt_updatedAt(5),
      districtId: {
        allowNull: false,
        type: DataTypes.CHAR(3),
      },
      ...Columns.address_name(140),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ward');
  },
}; // Ok
