'use strict'

module.exports = function setupOrder (OrderModel, ClientModel, ProductModel, ServiceModel) {
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

    const result = await OrderModel.create({
      ...ord
    }, {
      include: {
        model: ServiceModel
      }
    })
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
    return await OrderModel.findAll({ include: { all: true, nested: true }, raw: true })
  }

  async function findAllSales (status) {
    return await OrderModel.findAll({
      where: {
        paymentStatus: status
      },
      include: {
        model: ClientModel, ProductModel, ServiceModel
      },
      raw: true
    })
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
