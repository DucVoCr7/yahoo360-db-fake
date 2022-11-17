const { faker } = require('@faker-js/faker');
const readXlsxFile = require('read-excel-file/node'); // File path.

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const country = async () => {
      const country = [];
      await readXlsxFile('/Users/vohoaiduc/Downloads/Country.xlsx').then((rows) => {
        for (let i = 1; i < rows.length; i++) {
          const data = {
            id: rows[i][2].slice(3),
            createdAt: new Date(),
            updatedAt: new Date(),
            name: JSON.stringify({ vi: rows[i][1], en: rows[i][0] }),
            phoneId: rows[i][3],
          };
          country.push(data);
        }
      });
      return country;
    };
    return await queryInterface.bulkInsert('country', await country());
  },

  // async down(queryInterface, Sequelize) {},
};
