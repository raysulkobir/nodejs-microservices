const express = require('express');
const router = express.Router()
const brandController = require('../controller/BrandController')

//* Define routes for Brand operations
router.get('/brands', brandController.getAllBrands)
router.post('/brands', brandController.createBrand)
router.get('/brands/:id', brandController.getBrandById)
router.put('/brands/:id', brandController.updateBrand)
router.delete('/brands/:id', brandController.deleteBrand)

//TODO Fixed export to use 'module.exports'
module.exports = router
