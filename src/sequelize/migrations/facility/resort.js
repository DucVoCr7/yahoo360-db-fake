'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resort', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.name_email_password(),
      ...Columns.status_level(),
      ...Columns.phone_phoneId(),
      ...Columns.addressFull(),
      ...Columns.lat_long(),
      ...Columns.facility(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resort');
  },
}; // Ok
