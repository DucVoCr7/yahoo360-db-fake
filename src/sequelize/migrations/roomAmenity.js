'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roomAmenity', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      ...Columns.name_price_description_amenity(Sequelize),
      ...Columns.image5(Sequelize),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roomAmenity');
  },
}; // Ok
