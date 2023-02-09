"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "Ben xe Can Tho",
          address:
            "Lô 91B , Nguyễn An Ninh , Phương Hưng Lợi , Q. Ninh Kiều , TP. Can Tho",
          province: "CT",
          createdAt: "2023-01-14 06:29:51",
          updatedAt: "2023-01-14 06:29:51",
        },
        {
          name: "Ben xe Da Lat",
          address:
            "1 Đường Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Lâm Đồng",
          province: "LD",
          createdAt: "2023-01-14 06:29:51",
          updatedAt: "2023-01-14 06:29:51",
        },
        {
          name: "Ben xe Mien Tay",
          address: "395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
          province: "HCM",
          createdAt: "2023-01-14 06:29:51",
          updatedAt: "2023-01-14 06:29:51",
        },
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
    await queryInterface.bulkDelete('People', null, {});
  },
};
