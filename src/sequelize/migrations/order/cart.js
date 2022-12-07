'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      ...Columns.id_createdAt_updatedAt(), // Có id = lesseeId
      ...Columns.facilityId_facilityType(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  },
}; // OK
