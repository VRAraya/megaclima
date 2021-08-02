'use strict'

module.exports = function setupProduct (ProductModel) {
  async function createOrUpdate (prod) {
    const cond = {
      where: {
        name: prod.name
      }
    }

    const existingProduct = await ProductModel.findOne(cond)

    if (existingProduct) {
      const updated = await ProductModel.update(prod, cond)
      return updated ? ProductModel.findOne(cond) : existingProduct
    }

    const result = await ProductModel.create(prod)
    return result.toJSON()
  }

  async function findById (id) {
    return ProductModel.findByPk(id)
  }

  async function findAll () {
    return await ProductModel.findAll()
  }

  async function deleteById (id) {
    return await ProductModel.destroy({
      where: {
        id
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findAll,
    deleteById
  }
}
