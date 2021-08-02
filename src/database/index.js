'use strict'

const setupDatabase = require('./lib/db')

const setupClientModel = require('./models/client')
const setupServiceModel = require('./models/service')

const setupClient = require('./lib/client')
const setupService = require('./lib/service')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)

  const ClientModel = setupClientModel(config)
  const ServiceModel = setupServiceModel(config)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Client = setupClient(ClientModel)
  const Service = setupService(ServiceModel)

  return {
    Client,
    Service
  }
}
