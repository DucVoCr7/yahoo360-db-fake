'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resortRoomType', {
      ...Columns.id_createdAt_updatedAt(),
      resortId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      ...Columns.name_area_description_roomType(),
      ...Columns.price(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resortRoomType');
  },
}; // Ok
