'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motelRoomType_roomAmenity', {
      ...Columns.id_createdAt_updatedAt(),
      motelRoomTypeId: {
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
    await queryInterface.dropTable('motelRoomType_roomAmenity');
  },
}; // Ok
