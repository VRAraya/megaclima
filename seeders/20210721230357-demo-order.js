'use strict'

const faker = require('faker/locale/es')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [{
      billingNumber: faker.commerce.productName(),
      invoice: faker.commerce.price(),
      paymentMethod: faker.finance.transactionType(),
      totalValue: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {})
  }
}
