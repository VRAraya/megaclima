'use strict'
const { Model } = require('sequelize')
const { Product } = require('./product')
const { Service } = require('./service')
const { Client } = require('./client')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.hasOne(Client)
      this.belongsToMany(Product, { through: 'Product_Details' })
      this.belongsToMany(Service, { through: 'Service_Details' })
    }
  }
  Order.init({
    billingNumber: DataTypes.STRING, // Campo correspondiente a una cotización convertida en venta, cuando no es nulo se tratará de una venta
    additionalTax: DataTypes.FLOAT, // Campo correspondiente a una cotización convertida en venta
    discount: DataTypes.FLOAT, // Campo correspondiente a una cotización convertida en venta
    paymentMethod: DataTypes.STRING,
    netValue: DataTypes.FLOAT,
    subTotalValue: DataTypes.FLOAT,
    totalValue: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    clientId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Order'
  })
  return Order
}
