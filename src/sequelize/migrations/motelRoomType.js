'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motelRoomType', {
      ...Columns.id_createdAt_updatedAt(),
      motelId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      ...Columns.name_area_description_roomType(),
      ...Columns.price(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('motelRoomType');
  },
}; // Ok
