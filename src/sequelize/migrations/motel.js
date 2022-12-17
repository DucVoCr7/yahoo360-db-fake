'use strict';
const Columns = require('../columns/column.js');
const { DataTypes } = require('sequelize');
commentStatus = '0 - Hoạt động, 1 - Không hoạt động, 2 - Chưa được xét duyệt';
commentLevel = '0 - Mới đăng ký, 1 - Tiêu biểu, 2 - Nổi bật';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motel', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.name_email_password(),
      ...Columns.status_level(commentStatus, commentLevel),
      ...Columns.phone_phoneId(),
      ...Columns.addressFull(),
      ...Columns.lat_long(),
      ...Columns.facility(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('motel');
  },
}; // Ok
