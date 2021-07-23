'use strict'

const faker = require('faker/locale/es')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      {
        paymentMethod: faker.finance.transactionType(),
        netValue: faker.finance.amount(),
        subTotalValue: faker.finance.amount(),
        totalValue: faker.finance.amount(),
        description: faker.finance.transactionDescription(),
        discount: null,
        additionalTax: null,
        billingNumber: null,
        clientId: 2,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        paymentMethod: faker.finance.transactionType(),
        netValue: faker.finance.amount(),
        subTotalValue: faker.finance.amount(),
        totalValue: faker.finance.amount(),
        description: faker.finance.transactionDescription(),
        discount: null,
        additionalTax: null,
        billingNumber: null,
        clientId: 4,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        paymentMethod: faker.finance.transactionType(),
        netValue: faker.finance.amount(),
        subTotalValue: faker.finance.amount(),
        totalValue: faker.finance.amount(),
        description: faker.finance.transactionDescription(),
        discount: null,
        additionalTax: null,
        billingNumber: null,
        clientId: 5,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        paymentMethod: faker.finance.transactionType(),
        netValue: faker.finance.amount(),
        subTotalValue: faker.finance.amount(),
        totalValue: faker.finance.amount(),
        description: faker.finance.transactionDescription(),
        discount: null,
        additionalTax: null,
        billingNumber: null,
        clientId: 7,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        paymentMethod: faker.finance.transactionType(),
        netValue: faker.finance.amount(),
        subTotalValue: faker.finance.amount(),
        totalValue: faker.finance.amount(),
        description: faker.finance.transactionDescription(),
        discount: null,
        additionalTax: null,
        billingNumber: null,
        clientId: 8,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {})
  }
}
