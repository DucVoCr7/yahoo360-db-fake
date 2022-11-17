'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motel_facilityAmenity', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      motelId: {
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
    await queryInterface.dropTable('motel_facilityAmenity');
  },
}; // Ok
