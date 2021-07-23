'use strict'
const { Model } = require('sequelize')
const { Order } = require('./order')

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsTo(Order)
    }
  };
  Client.init({
    contactName: DataTypes.STRING,
    brandName: DataTypes.STRING,
    businessName: DataTypes.STRING, // Razón Social
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    rut: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client'
  })
  return Client
}
