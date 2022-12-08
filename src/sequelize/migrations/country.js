'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('country', {
      ...Columns.id_createdAt_updatedAt(3),
      name: {
        allowNull: false,
        type: DataTypes.STRING(90),
      },
      phoneId: {
        allowNull: false,
        type: DataTypes.INTEGER(8),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('country');
  },
}; // Ok
