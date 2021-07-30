import faker from 'faker/locale/es'

export default class ClientService {
  getClients () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(
          [
            {
              id: '0010',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0011',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0012',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0013',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0014',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0015',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0016',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0017',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0018',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0019',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0020',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0021',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0022',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0023',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0024',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            },
            {
              id: '0025',
              contactName: faker.name.findName(),
              brandName: faker.company.companyName(),
              businessName: faker.company.bs(),
              email: faker.internet.email(),
              address: faker.address.streetAddress(),
              city: faker.address.city(),
              phone: faker.phone.phoneNumber(),
              rut: faker.finance.routingNumber()
            }
          ]
        )
      }, 500)
    })
  }
}
