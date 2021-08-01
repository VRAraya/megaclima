'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupOrderModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('orders', {
    description: {
      type: Sequelize.TEXT
    },
    billingNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    paymentMethod: {
      type: Sequelize.STRING,
      allowNull: false
    },
    paymentStatus: {
      type: Sequelize.STRING,
      allowNull: false
    },
    netValue: {
      type: Sequelize.FLOAT
    },
    subTotalValue: {
      type: Sequelize.FLOAT
    },
    totalValue: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  }, {
    paranoid: true
  })
}
