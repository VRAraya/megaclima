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

let services, Client

export default class ClientService {
  async createClient (cli) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Client = services.Client
    }

    try {
      console.log('Creating new client')
      const result = await Client.createOrUpdate(cli)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async getClients () {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Client = services.Client
    }

    try {
      console.log('Getting all clients')
      const clients = await Client.findAll()
      return clients
    } catch (err) {
      console.error(err)
    }
  }

  async getClientById (cliId) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Client = services.Client
    }

    try {
      console.log('Getting client by id')
      const clients = await Client.findById(cliId)
      return clients
    } catch (err) {
      console.error(err)
    }
  }

  async getClientByRut (cliRut) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Client = services.Client
    }

    try {
      console.log('Getting client by Rut')
      const clients = await Client.findByRut(cliRut)
      return clients
    } catch (err) {
      console.error(err)
    }
  }

  async getClientByEmail (cliEmail) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Client = services.Client
    }

    try {
      console.log('Getting client by Email')
      const clients = await Client.findByEmail(cliEmail)
      return clients
    } catch (err) {
      console.error(err)
    }
  }

  async deleteClient (cliId) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Client = services.Client
    }

    try {
      console.log('Deleting Client')
      const clients = await Client.deleteById(cliId)
      return clients
    } catch (err) {
      console.error(err)
    }
  }
  // return new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     resolve(
  //       [
  //         {
  //           id: '0010',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0011',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0012',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0013',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0014',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0015',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0016',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0017',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0018',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0019',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0020',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0021',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0022',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0023',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0024',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         },
  //         {
  //           id: '0025',
  //           contactName: faker.name.findName(),
  //           brandName: faker.company.companyName(),
  //           businessName: faker.company.bs(),
  //           email: faker.internet.email(),
  //           address: faker.address.streetAddress(),
  //           city: faker.address.city(),
  //           phone: faker.phone.phoneNumber(),
  //           rut: faker.finance.routingNumber()
  //         }
  //       ]
  //     )
  //   }, 500)
  // })
  // }
}
