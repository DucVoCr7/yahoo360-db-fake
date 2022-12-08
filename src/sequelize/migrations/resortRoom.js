'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resortRoom', {
      ...Columns.id_createdAt_updatedAt(),
      resortId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      resortRoomTypeId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      ...Columns.room(),
      ...Columns.phone_phoneId(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resortRoom');
  },
}; // Ok
