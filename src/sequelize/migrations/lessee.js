'use strict';
const Columns = require('../columns/column.js');
const { DataTypes } = require('sequelize');
commentStatus = '0 - Hoạt động, 1 - Không hoạt động, 2 - Chưa xác thực email';
commentLevel = '0 - New, 1 - Bạc, 2 - Vàng, 3 - Bạch Kim, 4 - Diamond';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lessee', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.name_email_password(),
      ...Columns.phone_phoneId(true),
      ...Columns.status_level(commentStatus, commentLevel),
      ...Columns.addressFull(true),
      ...Columns.image_user(),
      ...Columns.birthday_gender(),
      ...Columns.lat_long(),
      accumulatedMoney: {
        allowNull: false,
        type: DataTypes.DOUBLE.UNSIGNED,
        defaultValue: 0,
        comment: 'Tiền tích luỹ',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lessee');
  },
}; // Bảng bên thuê
