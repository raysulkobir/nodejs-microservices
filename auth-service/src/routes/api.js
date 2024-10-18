const express = require('express')
const router = express.Router()

const authController = require('../controller/AuthController')

//TODO Authentication routes
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

//TODO Token verification route
router.post('/auth/verifyToken', authController.verifyToken);

//TODO Fixed export to use 'module.exports'
module.exports = router