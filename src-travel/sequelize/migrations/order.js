'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      ...Columns.id_createdAt_updatedAt(),
      code: {
        unique: true,
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING(20),
        comment: 'Trạng thái đơn hàng',
      },
      lesseeId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      roomId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
        comment: 'Id của roomMotel || roomHotel || roomResort',
      },
      roomType: {
        allowNull: false,
        type: DataTypes.TINYINT,
        comment: 'Xét loại phòng thuộc loại nào 0: modelRoom || 1: hotelRoom || 2: resortRoom',
      },
      timeStartUsing: {
        allowNull: false,
        type: DataTypes.DATE,
        comment: 'Thời gian bắt đầu sử dụng',
      },
      timeEndUsing: {
        allowNull: false,
        type: DataTypes.DATE,
        comment: 'Thời gian kết thúc việc sử dụng',
      },
      initialPrice: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Giá khởi tạo',
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Giá sau khi áp dụng chiến dịch',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  },
}; // OK
