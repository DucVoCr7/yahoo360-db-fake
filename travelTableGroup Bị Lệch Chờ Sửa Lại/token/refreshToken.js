'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('refreshToken', {
      ...Columns.id_createdAt_updatedAt(),
      refreshToken: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('refreshToken');
  },
};
