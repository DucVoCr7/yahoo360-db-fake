'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reply', {
      ...Columns.id_createdAt_updatedAt(),
      commentId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      ...Columns.userId_userType(),
      ...Columns.content_status()
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reply');
  },
}; // Bảng này dùng user vì admin, lessor, lessee đều có thể reply
