'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paymentMethod: {
        type: Sequelize.STRING
      },
      netValue: {
        type: Sequelize.FLOAT
      },
      subTotalValue: {
        type: Sequelize.FLOAT
      },
      totalValue: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.TEXT
      },
      clientId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clients',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.addConstraint('Orders', {
      type: 'FOREIGN KEY',
      name: 'FK_clients_orders',
      fields: ['clientId'],
      references: {
        table: 'Clients',
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Orders', 'FK_clients_orders')
    await queryInterface.dropTable('Orders')
  }
}
