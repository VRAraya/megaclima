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

let services, Product
export default class ProductService {
  async createProduct (prod) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Product = services.Product
    }

    try {
      console.log('Creating new product')
      const result = await Product.createOrUpdate(prod)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async getProducts () {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Product = services.Product
    }

    try {
      console.log('Getting all products')
      const results = await Product.findAll()
      return results
    } catch (err) {
      console.error(err)
    }
  }

  async getProductById (prodId) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Product = services.Product
    }

    try {
      console.log('Getting service by id')
      const result = await Product.findById(prodId)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  async deleteProduct (prodId) {
    if (!services) {
      console.log('Connecting to database')
      try {
        services = await db(config)
      } catch (err) {
        console.error(err)
      }
      Product = services.Product
    }

    try {
      console.log('Deleting Product')
      const result = await Product.deleteById(prodId)
      return result
    } catch (err) {
      console.error(err)
    }
  }
  // getProducts () {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       resolve(
  //         [
  //           {
  //             id: '1000',
  //             name: 'Soporte muro 9-12',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1001',
  //             name: 'Soporte muro 18-24',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1002',
  //             name: 'Soporte piso pequeño',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1003',
  //             name: 'Soporte piso grande',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1004',
  //             name: 'Soporte techo pequeño',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1005',
  //             name: 'Soporte techo grande',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1006',
  //             name: 'Canaleta 100x50',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1007',
  //             name: 'Enchufe 10 amp',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1008',
  //             name: 'Enchufe 16 amp',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1009',
  //             name: 'Bomba de condensado',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1010',
  //             name: 'Cordón eléctrico 3x1,5',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1011',
  //             name: 'Cordón eléctrico 3x2,5',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1012',
  //             name: 'Tubería de cobre',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1013',
  //             name: 'Aislación para tubería',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1014',
  //             name: 'Manguera para bomba',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           },
  //           {
  //             id: '1015',
  //             name: 'Manguera para desagüe',
  //             brandName: faker.company.companyName(),
  //             description: faker.commerce.productDescription(),
  //             price: faker.commerce.price(),
  //             cost: faker.commerce.price()
  //           }
  //         ]
  //       )
  //     }, 500)
  //   })
  // }
}
