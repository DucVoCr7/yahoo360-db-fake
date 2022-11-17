const { faker } = require('@faker-js/faker');
const readXlsxFile = require('read-excel-file/node'); // File path.

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const province = async () => {
      const province = [];
      await readXlsxFile('/Users/vohoaiduc/Downloads/Province.xlsx').then((rows) => {
        for (let i = 1; i < rows.length; i++) {
          const data = {
            id: rows[i][0],
            createdAt: new Date(),
            updatedAt: new Date(),
            countryId: 'VNM',
            sortName: JSON.stringify({ vi: rows[i][1], en: rows[i][3] }),
            fullName: JSON.stringify({ vi: rows[i][2], en: rows[i][4] }),
          };
          province.push(data);
        }
      });
      return province;
    };
    return await queryInterface.bulkInsert('province', await province());
  },

  // async down(queryInterface, Sequelize) {},
};
