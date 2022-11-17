'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotel_facilityAmenity', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      hotelId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      facilityAmenityId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hotel_facilityAmenity');
  },
}; // Ok
