var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var authMiddleware = require('../middlewares/authMiddleware');
router
  .post('/register', userController.register)
  .post('/login', userController.login)
  .get('/index', authMiddleware.isAuth, userController.index)
 
module.exports = router;