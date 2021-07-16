'use strict'

module.exports = function setupQuotation (QuotationModel) {
  async function createOrUpdate (quotation) {
    const cond = {
      where: {
        codeid: quotation.codeid
      }
    }

    const existingQuotation = await QuotationModel.findOne(cond)

    if (existingQuotation) {
      const updated = await QuotationModel.update(quotation, cond)
      return updated ? QuotationModel.findOne(cond) : existingQuotation
    }

    const result = await QuotationModel.create(quotation)
    return result.toJSON()
  }

  function findById (id) {
    return QuotationModel.findById(id)
  }

  function findByCodeId (codeid) {
    return QuotationModel.findOne({
      where: {
        codeid
      }
    })
  }

  function findAll () {
    return QuotationModel.findAll()
  }

  function findByName (name) {
    return QuotationModel.findAll({
      where: {
        name
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findByCodeId,
    findByName,
    findAll
  }
}
