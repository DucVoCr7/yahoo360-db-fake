'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motel_facilityAmenity', {
      ...Columns.id_createdAt_updatedAt(),
      motelId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      facilityAmenityId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('motel_facilityAmenity');
  },
}; // Bảng trung gian cơ sở - tiện ích cơ sở 
