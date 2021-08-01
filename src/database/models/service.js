'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupServiceModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('services', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    }
  }, {
    paranoid: true
  })
}
