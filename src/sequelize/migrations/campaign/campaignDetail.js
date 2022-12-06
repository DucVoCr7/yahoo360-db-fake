'use strict';
const Columns = require('../../columns/column.js');
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('campaignDetail', {
      ...Columns.id_createdAt_updatedAt(),
      campaignId: {
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      condition: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Điều kiện áp dụng chiến dịch'
      },
      percentDiscount: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        comment: 'Phần trăm giảm giá (%)'
      },
      amountDiscount: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Khoảng tiền giảm (VND)'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('campaignDetail');
  },
}; // OK
