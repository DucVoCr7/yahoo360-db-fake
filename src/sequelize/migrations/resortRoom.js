'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resortRoom', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      resortId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      resortRoomTypeId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      ...Columns.room(Sequelize),
      ...Columns.phone_phoneId(Sequelize),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resortRoom');
  },
}; // Ok
