'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motelRoomType_roomAmenity', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      motelRoomTypeId: {
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
    await queryInterface.dropTable('motelRoomType_roomAmenity');
  },
}; // Ok
