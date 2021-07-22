'use strict'
const { Model } = require('sequelize')
const { Order } = require('./order')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsToMany(Order, { through: 'Product_Details' })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    value: DataTypes.FLOAT,
    cost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product'
  })
  return Product
}
