const express = require('express')
const {getProducts, getProduct, addToCart, deleteFromCart, getCart} = require('./product.controller')

const router = express.Router()

router.get('/', getProducts)
router.get('/cart', getCart)
router.get('/:id', getProduct)
router.post('/update/:id', addToCart)
router.delete('/update/:id', deleteFromCart)

module.exports = router
