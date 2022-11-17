'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motelRoom', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      motelId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      motelRoomTypeId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      ...Columns.room(Sequelize),
      ...Columns.phone_phoneId(Sequelize),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('motelRoom');
  },
}; // Ok
