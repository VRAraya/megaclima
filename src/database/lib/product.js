'use strict'

module.exports = function setupClient (ClientModel) {
  async function createOrUpdate (client) {
    const cond = {
      where: {
        contactName: client.contactName
      }
    }

    const existingClient = await ClientModel.findOne(cond)

    if (existingClient) {
      const updated = await ClientModel.update(client, cond)
      return updated ? ClientModel.findOne(cond) : existingClient
    }

    const result = await ClientModel.create(client)
    return result.toJSON()
  }

  async function findById (id) {
    return ClientModel.findById(id)
  }

  async function findAll () {
    return await ClientModel.findAll()
  }

  async function findByRut (rut) {
    const result = await ClientModel.findAll({
      where: {
        rut
      }
    })
    return result
  }

  function findByEmail (email) {
    return ClientModel.findOne({
      where: {
        email
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findAll,
    findByRut,
    findByEmail
  }
}
