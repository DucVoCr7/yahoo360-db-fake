'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('facilityAmenityImage', {
      ...Columns.id_createdAt_updatedAt_image(),
      facilityAmenityId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('facilityAmenityImage');
  },
}; // Bảng hình ảnh của các tiện ích của cơ sở
