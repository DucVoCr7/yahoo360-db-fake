'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('province', {
      ...Columns.id_createdAt_updatedAt(2),
      countryId: {
        allowNull: false,
        type: DataTypes.CHAR(3),
      },
      ...Columns.address_name(80),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('province');
  },
}; // Ok
