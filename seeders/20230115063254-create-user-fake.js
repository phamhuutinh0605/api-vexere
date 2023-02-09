"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
        "name": "ben xe an giang ",
        "email": "long xuyen",
        "password": "HCM",
        "numberPhone":"234523523"
}
], {});
    */
    await queryInterface.bulkInsert(
      "users",
      [
        // {
        //   name: "Huỳnh Văn Bưởi",
        //   email: "huynhvanbuoi120@gmail.com",
        //   password: "123TB4",
        //   numberPhone: "0345423523",
        //   type: "CLIENT",
        //   createdAt: "2023-01-14 06:29:51",
        //   updatedAt: "2023-01-14 06:29:51",
        // },
        // {
        //   name: "Nguyễn Khoái",
        //   email: "nguyenkhoai0504@gmail.com",
        //   password: "123tt4",
        //   numberPhone: "0924233000",
        //   type: "CLIENT",
        //   createdAt: "2023-01-14 06:29:51",
        //   updatedAt: "2023-01-14 06:29:51",
        // },
        // {
        //   name: "Trần Văn Kiệt",
        //   email: "tranvankiet120k20@gmail.com",
        //   password: "kiet23203",
        //   numberPhone: "0977943422",
        //   type: "ADMIN",
        //   createdAt: "2023-01-14 06:29:51",
        //   updatedAt: "2023-01-14 06:29:51",
        // },
        // {
        //   name: "Nguyễn Chí Nghĩa",
        //   email: "nghialatui2k2@gmail.com",
        //   password: "tuilaNghia12345",
        //   numberPhone: "0357492602",
        //   type: "CLIENT",
        //   createdAt: "2023-01-14 06:29:51",
        //   updatedAt: "2023-01-14 06:29:51",
        // },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
