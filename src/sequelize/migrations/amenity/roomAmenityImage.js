'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roomAmenityImage', {
      ...Columns.id_createdAt_updatedAt_image(),
      roomAmenityId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roomAmenityImage');
  },
}; // Bảng hình ảnh của các tiện ích của phòng
