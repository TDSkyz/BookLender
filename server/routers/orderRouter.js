var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController');
router
  .route('/orders')
  .get(orderController.findAll)
  .post(orderController.create);

router
  .route('/orders/:orderId')
  .get(orderController.findOne)
  .put(orderController.update)
  .delete(orderController.delete)

router
  .route('/orders/user/:userId')
  .get(orderController.findOrdersByUserId)  
module.exports = router;