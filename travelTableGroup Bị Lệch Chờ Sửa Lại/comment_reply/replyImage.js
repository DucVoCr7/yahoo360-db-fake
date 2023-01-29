'use strict';
const Columns = require('../columns/column.js.js');

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('replyImage', {
      ...Columns.imageId_createdAt_updatedAt_image(),
      replyId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('replyImage');
  },
}; // OK
