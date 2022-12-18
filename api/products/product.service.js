const logger = require('../../services/logger.service')
const dbService = require('../../services/db.service')

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

module.exports = {
    query,
}
