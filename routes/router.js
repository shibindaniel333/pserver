const express = require('express')
const userController = require('../controller/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')


const router = new express.Router()


router.post('/register',userController.registerController)

router.post('/login',userController.loginController)

router.get('/all-users',jwtMiddleware,userController.getAllUsers)


module.exports =router