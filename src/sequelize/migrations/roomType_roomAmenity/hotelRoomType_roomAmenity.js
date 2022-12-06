'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotelRoomType_roomAmenity', {
      ...Columns.id_createdAt_updatedAt(),
      hotelRoomTypeId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      roomAmenityId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hotelRoomType_roomAmenity');
  },
}; // Ok
