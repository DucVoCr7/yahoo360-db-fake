const { faker } = require('@faker-js/faker');
const readXlsxFile = require('read-excel-file/node'); // File path.

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const district = async () => {
      const district = [];
      await readXlsxFile('/Users/ducvo/Documents/Address/District.xlsx').then((rows) => {
        for (let i = 1; i < rows.length; i++) {
          const data = {
            id: rows[i][0],
            createdAt: new Date(),
            updatedAt: new Date(),
            provinceId: rows[i][1],
            sortName: JSON.stringify({ vi: rows[i][2], en: rows[i][4] }),
            fullName: JSON.stringify({ vi: rows[i][3], en: rows[i][5] }),
          };
          district.push(data);
        }
      });
      return district;
    };
    return await queryInterface.bulkInsert('district', await district());
  },

  // async down(queryInterface, Sequelize) {},
};
