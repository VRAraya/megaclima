'use strict'

module.exports = function setupOrder (OrderModel, ClientModel) {
  async function createOrUpdate (ord) {
    const cond = {
      where: {
        code: ord.code
      }
    }

    const existingOrder = await OrderModel.findOne(cond)

    if (existingOrder) {
      const updated = await OrderModel.update(ord, cond)
      return updated ? OrderModel.findOne(cond) : existingOrder
    }

    const result = await OrderModel.create(ord)
    return result.toJSON()
  }

  async function findByCode (code) {
    const cond = {
      where: {
        code
      }
    }
    return OrderModel.findOne(cond)
  }

  async function findAll () {
    return await OrderModel.findAll({
      include: {
        model: ClientModel
      },
      raw: true
    })
  }

  async function findAllSales () {
    const cond = {
      where: {
        paymentStatus: 'paid'
      },
      include: {
        model: ClientModel
      },
      raw: true
    }
    return await OrderModel.findAll(cond)
  }

  async function deleteByCode (code) {
    return await OrderModel.destroy({
      where: {
        code
      }
    })
  }

  return {
    createOrUpdate,
    findByCode,
    findAll,
    findAllSales,
    deleteByCode
  }
}
