'use strict'

const setupDatabase = require('./lib/db')

const setupClientModel = require('./models/client')
const setupServiceModel = require('./models/service')
const setupProductModel = require('./models/product')
const setupOrderModel = require('./models/order')

const setupClient = require('./lib/client')
const setupService = require('./lib/service')
const setupProduct = require('./lib/product')
const setupOrder = require('./lib/order')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)

  const ClientModel = setupClientModel(config)
  const ServiceModel = setupServiceModel(config)
  const ProductModel = setupProductModel(config)
  const OrderModel = setupOrderModel(config)

  ClientModel.hasOne(OrderModel)
  OrderModel.belongsTo(ClientModel)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Client = setupClient(ClientModel)
  const Service = setupService(ServiceModel)
  const Product = setupProduct(ProductModel)
  const Order = setupOrder(OrderModel, ClientModel)

  // Client.Orders = ClientModel.belongsTo(OrderModel)

  return {
    Client,
    Service,
    Product,
    Order
  }
}
