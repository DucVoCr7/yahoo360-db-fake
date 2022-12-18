const { faker } = require('@faker-js/faker');
('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const randomLesseeList = (nLessee) => {
      const lesseeList = [];
      Array.from(new Array(nLessee)).forEach((element, key) => {
        const lessee = {
          id: faker.datatype.uuid(),
          createdAt: new Date(),
          updatedAt: new Date(),

          name: faker.name.fullName(),
          email: faker.internet.email(),
          password: '$2a$10$Kj2R4yn/pd5/4mMPocVIputnyLpLOa.n/FIGZnX22eRcUIHEnwU/y',

          phone: faker.phone.number('09########'),
          phoneId: faker.helpers.arrayElement(['84', '44', '90']),

          image: 'https://res.cloudinary.com/dy57fdikk/image/upload/v1659605718/ezgif-2-2b2c41425d_gws4ug.jpg',
          imageId: null,

          birthday: faker.date.birthdate(),
          gender: faker.helpers.arrayElement([0, 1]),
          status: 0,
        };
        lesseeList.push(lessee);
      });
      return lesseeList;
    };
    return await queryInterface.bulkInsert('lessee', randomLesseeList(50));
  },

  async down(queryInterface, Sequelize) {},
};
