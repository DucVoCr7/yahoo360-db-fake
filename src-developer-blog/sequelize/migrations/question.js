'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.userId_userType(),
      ...Columns.content_status(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('question');
  },
}; // Ok
