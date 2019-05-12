var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController');
var authMiddleware = require('../middlewares/authMiddleware');

router
  .route('/orders')
  .get(orderController.findAll)
  .post(authMiddleware.isAuth, orderController.create);

router
  .route('/orders/:orderId')
  .get(orderController.findOne)
  .put(orderController.update)
  .delete(orderController.delete)

router
  .route('/orders/user/:userId')
  .get(orderController.findOrdersByUserId)
module.exports = router;