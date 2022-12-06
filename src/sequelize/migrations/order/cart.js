'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      ...Columns.id_createdAt_updatedAt(),
      lesseeId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      ...Columns.facilityId_facilityType()
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  },
}; // OK
