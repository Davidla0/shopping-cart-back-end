const express = require('express')
const {getProducts} = require('./product.controller')

const router = express.Router()

router.get('/', getProducts)


module.exports = router
