'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('street', {
      ...Columns.id_createdAt_updatedAt(),
      wardId: {
        allowNull: false,
        type: DataTypes.CHAR(5),
      },
      ...Columns.address_name(180),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('street');
  },
}; // Ok
