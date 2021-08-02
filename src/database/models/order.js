'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupOrderModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('orders', {
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: Sequelize.TEXT
    },
    billingNumber: {
      type: Sequelize.STRING,
      unique: true
    },
    paymentMethod: {
      type: Sequelize.STRING
    },
    paymentStatus: {
      type: Sequelize.STRING,
      defaultValue: 'pending'
    },
    discount: {
      type: Sequelize.FLOAT,
      defaultValue: 0
    },
    additionalTax: {
      type: Sequelize.FLOAT,
      defaultValue: 0
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
