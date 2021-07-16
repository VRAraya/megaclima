'use strict'

const bcrypt = require('bcrypt')

module.exports = function setupSale (SaleModel) {
  async function create (sale) {
    const { rut, email, password } = sale
    const hashedPassword = await bcrypt.hashSync(password, 10)

    const result = await SaleModel.create({
      rut,
      email,
      password: hashedPassword
    })

    return result.toJSON()
  }

  async function createAdmin (sale) {
    const { rut, email, isAdmin, password } = sale
    const hashedPassword = await bcrypt.hashSync(password, 10)

    const result = await SaleModel.create({
      rut,
      email,
      isAdmin,
      password: hashedPassword
    })

    return result.toJSON()
  }

  async function findById (id) {
    return SaleModel.findById(id)
  }

  async function findAll () {
    return await SaleModel.findAll()
  }

  function isAdmin (rut) {
    return SaleModel.findAll({
      where: {
        rut
      },
      attributes: {
        isAdmin
      }
    })
  }

  function findByEmail (email) {
    return SaleModel.findOne({
      where: {
        email
      }
    })
  }

  return {
    create,
    createAdmin,
    findById,
    findAll,
    isAdmin,
    findByEmail
  }
}
