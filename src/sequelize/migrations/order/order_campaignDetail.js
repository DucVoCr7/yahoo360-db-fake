'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_campaignDetail', {
      ...Columns.id_createdAt_updatedAt(),
      orderId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      campaignDetailId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_campaignDetail');
  },
}; // Các chiến dịch áp dụng vào order
