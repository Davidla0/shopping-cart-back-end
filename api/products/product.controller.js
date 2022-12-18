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

async function addToCart(req, res){
    try {
        const product = await productService.updateById(req.params, 'add')
        res.send(product)
    } catch (error) {
        logger.error('Cannot add to cart', error)
        res.status(500).send({ err: 'Failed to add to cart' })
    }
}

async function deleteFromCart(req, res){
    try {
        const product = await productService.updateById(req.params, 'delete')
        res.send(product)
    } catch (error) {
        logger.error('Cannot delete from cart', error)
        res.status(500).send({ err: 'Failed to remove from cart' })
    }
}

async function getCart(req, res){
    try {
        const products = await productService.queryCart()
        res.send(products)
    } catch (error) {
        logger.error('Cannot get Cart', error)
        res.status(500).send({ err: 'Failed to get Cart' })

    }
}

module.exports = {
    getProducts,
    getProduct,
    addToCart,
    deleteFromCart,
    getCart
}