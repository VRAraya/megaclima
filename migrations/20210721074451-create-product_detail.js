'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product_Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      productId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
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
    await queryInterface.addConstraint('Product_Details', {
      type: 'FOREIGN KEY',
      name: 'FK_products_product_details',
      fields: ['productId'],
      references: {
        table: 'Products',
        field: 'id'
      }
    })
    await queryInterface.addConstraint('Product_Details', {
      type: 'FOREIGN KEY',
      name: 'FK_orders_product_details',
      fields: ['orderId'],
      references: {
        table: 'Orders',
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Product_Details', 'FK_products_product_details')
    await queryInterface.removeConstraint('Product_Details', 'FK_orders_product_details')
    await queryInterface.dropTable('Product_Details')
  }
}
