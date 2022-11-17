'use strict';
const Columns = require('../columns/column.js');
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('motelRoom_roomAmenity', {
         ...Columns.id_createdAt_updatedAt(Sequelize),
         motelRoomId: {
            type: Sequelize.CHAR(36),
         },
         roomAmenityId: {
            type: Sequelize.CHAR(36),
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('motelRoom_roomAmenity');
   },
};
