'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('campaign', {
      ...Columns.id_createdAt_updatedAt(),
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      type: {
        allowNull: false,
        type: DataTypes.TINYINT,
        comment: 'Loại chiến dịch'
      },
      ...Columns.content_status()
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('campaign');
  },
}; // OK
