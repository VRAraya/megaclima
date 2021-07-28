import faker from 'faker/locale/es'

export default class OrderService {
  getOrders () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(
          [
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1000',
                  name: 'Soporte muro 9-12',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1013',
                  name: 'Aislación para tubería',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1013',
                  name: 'Aislación para tubería',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products: []
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1000',
                  name: 'Soporte muro 9-12',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1000',
                  name: 'Soporte muro 9-12',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1000',
                  name: 'Soporte muro 9-12',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1002',
                  name: 'Soporte piso pequeño',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1002',
                  name: 'Soporte piso pequeño',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1013',
                  name: 'Aislación para tubería',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1000',
                  name: 'Soporte muro 9-12',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1002',
                  name: 'Soporte piso pequeño',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1002',
                  name: 'Soporte piso pequeño',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1000',
                  name: 'Soporte muro 9-12',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1001',
                  name: 'Soporte muro 18-24',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            },
            {
              id: faker.finance.mask(),
              paymentMethod: faker.finance.transactionType(),
              description: faker.commerce.productDescription(),
              netValue: faker.commerce.price(),
              subTotalValue: faker.finance.amount(),
              totalValue: faker.finance.amount(),
              client: {
                id: faker.finance.mask(),
                contactName: faker.name.findName(),
                brandName: faker.company.companyName(),
                businessName: faker.company.bs(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                rut: faker.finance.routingNumber()
              },
              services:
              [
                {
                  id: '0102',
                  name: 'Instalación Básica',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }, {
                  id: '0100',
                  name: 'Mantención',
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price()
                }
              ],
              products:
              [
                {
                  id: '1001',
                  name: 'Soporte muro 18-24',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1007',
                  name: 'Enchufe 10 amp',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                },
                {
                  id: '1011',
                  name: 'Cordón eléctrico 3x2,5',
                  brandName: faker.company.companyName(),
                  description: faker.commerce.productDescription(),
                  price: faker.commerce.price(),
                  cost: faker.commerce.price(),
                  quantity: faker.datatype.number({ min: 1, max: 10 })
                }
              ]
            }
          ]
        )
      }, 500)
    })
  }
}
