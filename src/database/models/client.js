'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupClientModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('clients', {
    contactName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    brandName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    businessName: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    rut: {
      type: Sequelize.STRING
    }
  }, {
    paranoid: true
  })
}
