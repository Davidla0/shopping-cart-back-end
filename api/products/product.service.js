const logger = require('../../services/logger.service')
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('products')
        const products = await collection.find().toArray()
        return products
    } catch (error) {
        logger.error('cannot find products', error)
        throw error
    }
}

async function getById(productId) {
    try {
        const collection = await dbService.getCollection('products')
        const product = await collection.findOne({ '_id': ObjectId(productId) })
        return product
    } catch (error) {
        logger.error('cannot find product', error)
        throw error
    }
}

module.exports = {
    query,
    getById
}
