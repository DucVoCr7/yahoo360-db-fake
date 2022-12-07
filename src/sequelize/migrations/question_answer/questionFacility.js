'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questionFacility', {
      ...Columns.id_createdAt_updatedAt(),
      lesseeId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      ...Columns.content_status(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('questionFacility');
  },
}; // Chỉ khách hàng lẻ dc đặt câu hỏi
