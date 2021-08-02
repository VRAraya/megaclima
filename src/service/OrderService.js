// import faker from 'faker/locale/es'
const db = require('../database/index.js')

const config = {
  dialect: 'sqlite',
  storage: './src/database/database.sqlite',
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
  query: {
    raw: true
  },
  logging: console.log()
}

let services, Order

export default class OrderService {
  async createOrder (ord) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Order = services.Order
    }

    try {
      console.log('Creating new order')
      const result = await Order.createOrUpdate(ord)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async getOrders () {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Order = services.Order
    }

    try {
      console.log('Getting all orders')
      const results = await Order.findAll()
      return results
    } catch (err) {
      console.error(err)
    }
  }

  async deleteOrder (ordCode) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Order = services.Order
    }

    try {
      console.log('Deleting Order')
      const orders = await Order.deleteByCode(ordCode)
      return orders
    } catch (err) {
      console.error(err)
    }
  }
  // getOrders () {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       resolve(
  //         [
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1000',
  //                 name: 'Soporte muro 9-12',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1013',
  //                 name: 'Aislación para tubería',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1013',
  //                 name: 'Aislación para tubería',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products: []
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1000',
  //                 name: 'Soporte muro 9-12',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1000',
  //                 name: 'Soporte muro 9-12',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1000',
  //                 name: 'Soporte muro 9-12',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1002',
  //                 name: 'Soporte piso pequeño',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1002',
  //                 name: 'Soporte piso pequeño',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1013',
  //                 name: 'Aislación para tubería',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1000',
  //                 name: 'Soporte muro 9-12',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1002',
  //                 name: 'Soporte piso pequeño',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1002',
  //                 name: 'Soporte piso pequeño',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1000',
  //                 name: 'Soporte muro 9-12',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1001',
  //                 name: 'Soporte muro 18-24',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           },
  //           {
  //             id: faker.finance.mask(),
  //             paymentMethod: null,
  //             paymentStatus: 'pending',
  //             description: faker.commerce.productDescription(),
  //             netValue: faker.commerce.price(),
  //             billingNumber: null,
  //             subTotalValue: faker.finance.amount(),
  //             totalValue: faker.finance.amount(),
  //             client:
  //             {
  //               id: faker.finance.mask(),
  //               contactName: faker.name.findName(),
  //               brandName: faker.company.companyName(),
  //               businessName: faker.company.bs(),
  //               email: faker.internet.email(),
  //               address: faker.address.streetAddress(),
  //               city: faker.address.city(),
  //               phone: faker.phone.phoneNumber(),
  //               rut: faker.finance.routingNumber()
  //             },
  //             services:
  //             [
  //               {
  //                 id: '0102',
  //                 name: 'Instalación Básica',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               },
  //               {
  //                 id: '0100',
  //                 name: 'Mantención',
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price()
  //               }
  //             ],
  //             products:
  //             [
  //               {
  //                 id: '1001',
  //                 name: 'Soporte muro 18-24',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1007',
  //                 name: 'Enchufe 10 amp',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               },
  //               {
  //                 id: '1011',
  //                 name: 'Cordón eléctrico 3x2,5',
  //                 brandName: faker.company.companyName(),
  //                 description: faker.commerce.productDescription(),
  //                 price: faker.commerce.price(),
  //                 cost: faker.commerce.price(),
  //                 quantity: faker.datatype.number({ min: 1, max: 10 })
  //               }
  //             ]
  //           }
  //         ]
  //       )
  //     }, 500)
  //   })
  // }
}
