'use strict'

module.exports = function setupService (ServiceModel) {
  async function createOrUpdate (serv) {
    const cond = {
      where: {
        name: serv.name
      }
    }

    const existingService = await ServiceModel.findOne(cond)

    if (existingService) {
      const updated = await ServiceModel.update(serv, cond)
      return updated ? ServiceModel.findOne(cond) : existingService
    }

    const result = await ServiceModel.create(serv)
    return result.toJSON()
  }

  async function findById (id) {
    return ServiceModel.findByPk(id)
  }

  async function findAll () {
    return await ServiceModel.findAll()
  }

  async function deleteById (id) {
    return await ServiceModel.destroy({
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
