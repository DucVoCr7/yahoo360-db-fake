const { faker } = require('@faker-js/faker');
('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const randomAdminList = (nAdmin) => {
      const adminList = [];
      Array.from(new Array(nAdmin)).forEach((element, key) => {
        const admin = {
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
        adminList.push(admin);
      });
      return adminList;
    };

    return await queryInterface.bulkInsert('admin', randomAdminList(20));
  },
  async down(queryInterface, Sequelize) {},
};
