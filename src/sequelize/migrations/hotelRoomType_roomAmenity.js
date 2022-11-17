'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotelRoomType_roomAmenity', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      hotelRoomTypeId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      roomAmenityId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hotelRoomType_roomAmenity');
  },
}; // Ok
