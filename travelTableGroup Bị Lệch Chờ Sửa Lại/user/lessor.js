'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lessor', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.name_email_password(),
      ...Columns.phone_phoneId(),
      ...Columns.status_level(),
      ...Columns.addressFull(true),
      ...Columns.image_imageId(),
      ...Columns.birthday_gender(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lessor');
  },
}; // Bản bên cho thuê
