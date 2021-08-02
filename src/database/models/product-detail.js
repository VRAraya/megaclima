'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProductDetailModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('product_details', {
    quantity: {
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: false
  })
}
