'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resort', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      ...Columns.name_email_password(Sequelize),
      ...Columns.phone_phoneId(Sequelize),
      ...Columns.image5(Sequelize),
      ...Columns.addressFull(Sequelize),
      ...Columns.lat_long(Sequelize),
      ...Columns.facility(Sequelize),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resort');
  },
}; // Ok
