'use strict'

const faker = require('faker/locale/es')
const RandExp = require('randexp')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clients', [{
      contactName: faker.name.findName(),
      brandName: faker.name.companyName(),
      businessName: faker.company.bs(), // Razón Social
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      phone: new RandExp(/^(\+56)[2-9][1-9]\d{7}$/).gen(),
      city: faker.address.city(),
      rut: new RandExp(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/).gen(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {})
  }
}
