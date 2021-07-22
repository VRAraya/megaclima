'use strict'

const faker = require('faker/locale/es')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      name: faker.commerce.productName(),
      value: faker.commerce.price(),
      cost: faker.commerce.price(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {})
  }
}
