'use strict';
const Columns = require('../columns/column.js');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motelRoomType', {
      ...Columns.id_createdAt_updatedAt(Sequelize),
      motelId: {
        allowNull: false,
        type: Sequelize.CHAR(36),
      },
      ...Columns.name_area_description_roomType(Sequelize),
      ...Columns.price(Sequelize),
      ...Columns.image5(Sequelize),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('motelRoomType');
  },
}; // Ok
