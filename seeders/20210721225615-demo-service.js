'use strict'

const faker = require('faker/locale/es')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {
        name: 'Mantención',
        value: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Reparación o Servicio Técnico',
        value: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Instalación Básica',
        value: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Instalación Media',
        value: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Instalación compleja',
        value: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Venta de equipos',
        value: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },
      {
        name: 'Insumos',
        value: faker.commerce.price(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services', null, {})
  }
}
