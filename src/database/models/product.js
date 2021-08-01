'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProductModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('products', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    brandName: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    cost: {
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
