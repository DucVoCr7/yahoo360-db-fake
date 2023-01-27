'use strict';
const Columns = require('../columns/column.js');
const { DataTypes } = require('sequelize');
const commentStatus = '0 - Hoạt động, 1 - Chưa xác thực phone, 2 - Chưa xác thực email, 3 - Không còn hoạt động';
const commentLevel = '0 - New, 1 - Bạc, 2 - Vàng, 3 - Bạch Kim, 4 - Diamond';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lessor', {
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
    await queryInterface.dropTable('lessor');
  },
}; // Bản bên cho thuê
