const logger = require('../../services/logger.service')
const productService = require('./product.service')

async function getProducts(req, res){
    try {
        const products = await productService.query()
        res.send(products)
    } catch (error) {
        logger.error('Cannot get products', error)
        res.status(500).send({ err: 'Failed to get products' })

    }
}

async function getProduct(req, res){
    try {
        const product = await productService.getById(req.params)
        res.send(product)
    } catch (error) {
        logger.error('Cannot get product', error)
        res.status(500).send({ err: 'Failed to get product' })

    }
}

module.exports = {
    getProducts,
    getProduct
}