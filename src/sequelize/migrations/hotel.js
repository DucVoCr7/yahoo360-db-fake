'use strict';
const Columns = require('../columns/column.js');
const { DataTypes } = require('sequelize');
const commentStatus =
  '0 - Hoạt động,  1 - Yêu cầu chỉnh sửa lại thông tin, 2 - Chưa được xét duyệt, 3 - Không hoạt động,';
const commentLevel = '0 - Mới đăng ký, 1 - Tiêu biểu, 2 - Nổi bật';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotel', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.name_email_password(),
      ...Columns.status_level(commentStatus, commentLevel),
      ...Columns.phone_phoneId(),
      ...Columns.addressFull(),
      ...Columns.lat_lng(),
      ...Columns.facility(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hotel');
  },
}; // Ok
