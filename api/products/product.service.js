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

async function updateById(proId, action) {
    try {
        let product = await getById(proId)
        let collection = await dbService.getCollection('cart')

        if(action === 'delete'){
            product = await collection.findOne({ 'proId': ObjectId(proId) })
            await collection.deleteOne({ '_id': ObjectId(product._id) })
                
        }
        else{
            product.proId = product._id
            delete product._id
            await collection.insertOne(product) 
        }
       
        return product
    } catch (error) {
        logger.error('cannot find products', error)
        throw error
    }
}

async function queryCart() {
    try {
        const collection = await dbService.getCollection('cart')
        const products = await collection.find().toArray()
        return products
    } catch (error) {
        logger.error('cannot find cart', error)
        throw error
    }
}

module.exports = {
    query,
    getById,
    updateById,
    queryCart
}