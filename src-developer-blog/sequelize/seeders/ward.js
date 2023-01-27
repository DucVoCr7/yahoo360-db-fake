const { faker } = require('@faker-js/faker');
const readXlsxFile = require('read-excel-file/node'); // File path.

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const ward = async () => {
      const ward = [];
      await readXlsxFile('/Users/ducvo/Documents/Address/Ward.xlsx').then((rows) => {
        for (let i = 1; i < rows.length; i++) {
          const data = {
            id: rows[i][0],
            createdAt: new Date(),
            updatedAt: new Date(),
            districtId: rows[i][1],
            sortName: JSON.stringify({ vi: rows[i][2], en: rows[i][4] }),
            fullName: JSON.stringify({ vi: rows[i][3], en: rows[i][5] }),
          };
          ward.push(data);
        }
      });
      return ward;
    };
    return await queryInterface.bulkInsert('ward', await ward());
  },

  // async down(queryInterface, Sequelize) {},
};
