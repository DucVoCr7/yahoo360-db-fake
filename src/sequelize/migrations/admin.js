'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admin', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      ...Columns.name_email_password(Sequelize),
      ...Columns.phone_phoneId(Sequelize),
      ...Columns.addressFull(Sequelize, true),
      ...Columns.image(Sequelize),
      ...Columns.birthday_gender(Sequelize),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admin');
  },
}; // OK
