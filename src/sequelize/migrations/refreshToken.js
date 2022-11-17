'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('refreshToken', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      refreshToken: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('refreshToken');
  },
};
