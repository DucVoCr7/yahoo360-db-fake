'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motelImage', {
      ...Columns.imageId_createdAt_updatedAt_image(), // Id là id hình
      motelId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('motelImage');
  },
}; // Ok
