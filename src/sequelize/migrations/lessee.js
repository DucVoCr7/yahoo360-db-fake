'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lessee', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      ...Columns.name_email_password(Sequelize, true),
      ...Columns.phone_phoneId(Sequelize, true),
      ...Columns.addressFull(Sequelize, true),
      ...Columns.image(Sequelize),
      ...Columns.birthday_gender(Sequelize),
      ...Columns.lat_long(Sequelize),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lessee');
  },
}; // Ok
