'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      lesseeId: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      ...Columns.facilityId_facilityType(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  },
}; // OK
