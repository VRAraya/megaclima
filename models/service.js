'use strict'
const { Model } = require('sequelize')
const { Order } = require('./order')

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsToMany(Order, { through: 'Service_Details' })
    }
  }
  Service.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Service'
  })
  return Service
}
