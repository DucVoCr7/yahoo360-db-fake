'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotelRoom', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      hotelId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      hotelRoomTypeId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      ...Columns.room(Sequelize),
      ...Columns.phone_phoneId(Sequelize),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hotelRoom');
  },
}; // Ok
