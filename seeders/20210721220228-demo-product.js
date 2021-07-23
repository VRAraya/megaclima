'use strict'

const faker = require('faker/locale/es')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Soporte muro 9-12',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Soporte muro 18-24',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Soporte piso pequeño',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Soporte piso grande',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Soporte techo pequeño',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Soporte techo grande',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Canaleta 100x50',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Enchufe 10 amp',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Enchufe 16 amp',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Bomba de condensado',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Cordón eléctrico 3x1,5',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Cordón eléctrico 3x2,5',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Tubería de cobre',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Aislación para tubería',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Manguera para bomba',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Manguera para desagüe',
        value: faker.commerce.price(),
        brandName: faker.company.companyName(),
        cost: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {})
  }
}
