'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('apartment', {
      ...Columns.id_createdAt_updatedAt(),
      streetId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      ...Columns.address_name(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('apartment');
  },
}; // Ok
