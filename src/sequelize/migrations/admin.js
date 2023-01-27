'use strict';
const Columns = require('../columns/column.js');
const { DataTypes } = require('sequelize');
const commentStatus = '0 - Hoạt động, 1 - Không hoạt động, 2 - Chưa được xét duyệt';
const commentLevel =
  '0 - Quản trị viên, 1 -  Tổng đài viên, 2 - Trưởng phòng tổng đài, 3 - Trưởng phòng quản trị, 4 - Root Admin';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admin', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.name_email_password(),
      ...Columns.phone_phoneId(),
      ...Columns.status_level(commentStatus, commentLevel),
      ...Columns.addressFull(true),
      ...Columns.image_user(),
      ...Columns.birthday_gender(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admin');
  },
}; // OK
