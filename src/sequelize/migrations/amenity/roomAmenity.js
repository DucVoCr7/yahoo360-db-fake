'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roomAmenity', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.name_price_description_amenity(),
      status: {
        allowNull: false,
        type: DataTypes.TINYINT,
        defaultValue: 0,
        comment: 'Trạng thái của đối tượng (0 - Hoạt động, 1 - Không hoạt động, 2 - Khoá)',
      },
      type: {
        allowNull: false,
        type: DataTypes.TINYINT,
        defaultValue: 0,
        comment: 'Loại miễn phí hay tính phí (0 - tính phí)',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roomAmenity');
  },
}; // Bảng tiện ích của phòng
