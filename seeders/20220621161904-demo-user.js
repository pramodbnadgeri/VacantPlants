'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'user1',
          email: 'user1@test.com',
          "password": "u1pass1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'user2',
          email: 'user2@test.com',
          "password": "u2pass2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'user3',
          email: 'user3@test.com',
          "password": "u3pass3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'user_sites',
      [
        {
          name: 'bangalore',
          user_id: 1,
          dimension: 200,
          lattitude: 10,
          longitude: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'mysore',
          user_id: 2,
          dimension: 400,
          lattitude: 20,
          longitude: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'udupi',
          user_id: 3,
          dimension: 600,
          lattitude: 30,
          longitude: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Saplings',
      [
        {
          site_id: 1,
          sapling_count: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          site_id: 2,
          sapling_count: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          site_id: 3,
          sapling_count: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
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
     * */
    await queryInterface.dropAllTables();

  }
};
