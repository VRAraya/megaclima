'use strict'

const setupDatabase = require('./lib/db')
const setupClientModel = require('./models/client')
const setupClient = require('./lib/client')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const ClientModel = setupClientModel(config)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Client = setupClient(ClientModel)

  return {
    Client
  }
}
