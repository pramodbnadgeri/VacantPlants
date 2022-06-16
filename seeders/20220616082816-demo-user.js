'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'user1',
          email: 'user1@test.com',
          password: 'p1 user1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'user2',
          email: 'user2@test.com',
          password: 'p2 user2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'user3',
          email: 'user3@test.com',
          password: 'p3 user3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    //   await queryInterface.bulkInsert(
    //     'location',
    //     [
    //       {
    //         id: 1,
    //         name: 'bangalore',
    //         user_id: 1,
    //         size: 400,
    //         created_at: new Date(),
    //         updated_at: new Date(),
    //       },
    //       {
    //         id: 2,
    //         name: 'chennai',
    //         user_id: 2,
    //         size: 600,
    //         created_at: new Date(),
    //         updated_at: new Date(),
    //       },
    //     ],
    //     {}
    //   );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
