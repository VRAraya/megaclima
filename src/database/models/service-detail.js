'use strict'

const setupDatabase = require('../lib/db')

module.exports = function setupServiceDetailModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('service_details', {}, {
    timestamps: false
  })
}
