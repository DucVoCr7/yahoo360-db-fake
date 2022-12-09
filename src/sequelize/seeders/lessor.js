// @ts-nocheck
const { faker } = require('@faker-js/faker');
('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const randomLessorList = (nLessor) => {
      const lessorList = [];
      Array.from(new Array(nLessor)).forEach((element, key) => {
        const lessor = {
          id: faker.datatype.uuid(),
          createdAt: new Date(),
          updatedAt: new Date(),

          name: faker.name.fullName(),
          email: faker.internet.email(),
          password: '$2a$10$Kj2R4yn/pd5/4mMPocVIputnyLpLOa.n/FIGZnX22eRcUIHEnwU/y',

          phone: faker.phone.number('09########'),
          phoneId: '84',

          image: 'https://res.cloudinary.com/dy57fdikk/image/upload/v1659605718/ezgif-2-2b2c41425d_gws4ug.jpg',
          imageId: null,

          birthday: faker.date.birthdate(),
          gender: faker.helpers.arrayElement(['Male', 'Female']),
        };
        lessorList.push(lessor);
      });
      return lessorList;
    };
    return await queryInterface.bulkInsert('lessor', randomLessorList(30));
  },

  // async down(queryInterface, Sequelize) {},
};
