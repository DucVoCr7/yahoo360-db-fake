'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_facilityAmenity', {
      ...Columns.id_createdAt_updatedAt(),
      orderId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      facilityAmenityId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      numberUsed: {
        allowNull: false,
        type: DataTypes.TINYINT,
        defaultValue: 1,
        comment: 'Số lần sử dụng tiện ích',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order_facilityAmenity');
  },
}; // Tiện ích mua thêm trong quá trình sử dụng hoặc đặt trước
