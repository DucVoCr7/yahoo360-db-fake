'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('answerQuestionFacilityImage', {
      ...Columns.id_createdAt_updatedAt_image(),
      answerQuestionFacilityId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('answerQuestionFacilityImage');
  },
}; // OK
