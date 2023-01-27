'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comment', {
      ...Columns.id_createdAt_updatedAt(),
      lesseeId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      ...Columns.facilityId_facilityType(),
      ...Columns.content_status(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comment');
  },
}; // Chỉ lessee mới có thể comment
