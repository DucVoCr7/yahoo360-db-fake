'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resortRoomType_roomAmenity', {
      ...Columns.id_createdAt_updatedAt(),
      resortRoomTypeId: {
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
    await queryInterface.dropTable('resortRoomType_roomAmenity');
  },
}; // Ok
