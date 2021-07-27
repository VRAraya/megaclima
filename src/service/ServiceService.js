import faker from 'faker/locale/es'

export default class ServiceService {
  getServices () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(
          [
            {
              id: '0100',
              name: 'Mantención',
              description: faker.commerce.productDescription(),
              price: faker.commerce.price()
            },
            {
              id: '0101',
              name: 'Reparación o Servicio Técnico',
              description: faker.commerce.productDescription(),
              price: faker.commerce.price()
            },
            {
              id: '0102',
              name: 'Instalación Básica',
              description: faker.commerce.productDescription(),
              price: faker.commerce.price()
            },
            {
              id: '0103',
              name: 'Instalación Media',
              description: faker.commerce.productDescription(),
              price: faker.commerce.price()
            },
            {
              id: '0104',
              name: 'Instalación Compleja',
              description: faker.commerce.productDescription(),
              price: faker.commerce.price()
            },
            {
              id: '0105',
              name: 'Venta de equipos',
              description: faker.commerce.productDescription(),
              price: faker.commerce.price()
            },
            {
              id: '0106',
              name: 'Insumos',
              description: faker.commerce.productDescription(),
              price: faker.commerce.price()
            }
          ]
        )
      }, 500)
    })
  }
}
