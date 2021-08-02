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

let services, Service

export default class ServiceService {
  async createService (serv) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Service = services.Service
    }

    try {
      console.log('Creating new service')
      const result = await Service.createOrUpdate(serv)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async getServices () {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Service = services.Service
    }

    try {
      console.log('Getting all services')
      const results = await Service.findAll()
      return results
    } catch (err) {
      console.error(err)
    }
  }

  async getServiceById (servId) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Service = services.Service
    }

    try {
      console.log('Getting service by id')
      const result = await Service.findById(servId)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async deleteService (servId) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Service = services.Service
    }

    try {
      console.log('Deleting Service')
      const result = await Service.deleteById(servId)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  // getServices () {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       resolve(
  //         [
  //           {
  //             id: '0100',
  //             name: 'Mantención',
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price()
  //           },
  //           {
  //             id: '0101',
  //             name: 'Reparación o Servicio Técnico',
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price()
  //           },
  //           {
  //             id: '0102',
  //             name: 'Instalación Básica',
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price()
  //           },
  //           {
  //             id: '0103',
  //             name: 'Instalación Media',
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price()
  //           },
  //           {
  //             id: '0104',
  //             name: 'Instalación Compleja',
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price()
  //           },
  //           {
  //             id: '0105',
  //             name: 'Venta de equipos',
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price()
  //           },
  //           {
  //             id: '0106',
  //             name: 'Insumos',
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price()
  //           }
  //         ]
  //       )
  //     }, 500)
  //   })
  // }
}
