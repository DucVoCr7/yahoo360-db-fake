'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('campaignImage', {
      ...Columns.id_createdAt_updatedAt_image(),
      campaignId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('campaignImage');
  },
}; // OK
