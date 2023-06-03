const express = require('express');
const {loginController, registerController} = require('../controllers/userController')


const router = express.Router();

// route for login 
router.post('/login',loginController,()=>{

})

// route fro register 
router.post('/register',registerController,()=>{

})

module.exports = router;