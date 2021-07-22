'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Service_Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Services',
          key: 'id'
        }
      },
      orderId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
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
    await queryInterface.addConstraint('Service_Details', {
      type: 'FOREIGN KEY',
      name: 'FK_services_service_details',
      fields: ['serviceId'],
      references: {
        table: 'Services',
        field: 'id'
      }
    })
    await queryInterface.addConstraint('Service_Details', {
      type: 'FOREIGN KEY',
      name: 'FK_orders_service_details',
      fields: ['orderId'],
      references: {
        table: 'Orders',
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Service_Details', 'FK_services_service_details')
    await queryInterface.removeConstraint('Service_Details', 'FK_orders_service_details')
    await queryInterface.dropTable('Service_Details')
  }
}
