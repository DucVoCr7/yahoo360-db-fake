'use strict';
const Columns = require('../columns/column.js');
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('hotelRoom_roomAmenity', {
         ...Columns.id_createdAt_updatedAt(Sequelize),
         hotelRoomId: {
            allowNull: false,
            type: Sequelize.CHAR(36),
         },
         roomAmenityId: {
            allowNull: false,
            type: Sequelize.CHAR(36),
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('hotelRoom_roomAmenity');
   },
};
