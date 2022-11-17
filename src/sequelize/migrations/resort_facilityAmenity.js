'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resort_facilityAmenity', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      resortId: {
        type: Sequelize.CHAR(36),
      },
      facilityAmenityId: {
        type: Sequelize.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resort_facilityAmenity');
  },
}; // Ok
