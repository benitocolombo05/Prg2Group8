var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

/* GET users listing. */
router.get('/login', userController.login)
router.get('/register', userController.register)
router.get('/myprofile', userController.myprofile)
router.get('/profile/:id', userController.profile)
router.get('/prueba', userController.pruebaDatabase)
router.get("/logout", userController.logout)

router.post('/registerProcessor', userController.registerProcessor);
router.post('/loginProcessor', userController.loginProcessor);


module.exports = router;


