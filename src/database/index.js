'use strict'

const setupDatabase = require('./lib/db')

const setupClientModel = require('./models/client')
const setupServiceModel = require('./models/service')
const setupProductModel = require('./models/product')

const setupClient = require('./lib/client')
const setupService = require('./lib/service')
const setupProduct = require('./lib/product')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)

  const ClientModel = setupClientModel(config)
  const ServiceModel = setupServiceModel(config)
  const ProductModel = setupProductModel(config)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Client = setupClient(ClientModel)
  const Service = setupService(ServiceModel)
  const Product = setupProduct(ProductModel)

  return {
    Client,
    Service,
    Product
  }
}
