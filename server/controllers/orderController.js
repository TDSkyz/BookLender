// const Order = require('../models/OrderModel');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      return res.send({
        message: "Order content can not be empty"
      });
    }
    const order = await new Order(req.body);
    await order.save();
    return res.json({
      success: true,
      data: order
    });
  } catch (err) {
    return res.send({
      message:
        err.message || "Some error occurred while creating the Order."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('book');
    return res.json({
      success: true,
      data: orders
    });
  } catch (err) {
    return res.status(404).send({
      message:
        err.message || "Some error occurred while creating the Order."
    });
  };
};

exports.findOne = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate('user').populate('book');
    if (!order) {
      return res.json({
        success: false,
        error: 'Order is not found'
      });
    }
    return res.json({
      success: true,
      data: order
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.send({
        message: "Order not found with id " + req.params.orderId
      });
    }
    return res.send({
      message: "Error retrieving Order with id " + req.params.orderId
    });
  }
};

exports.update = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (req.body._id) {
      delete req.body._id;
    }
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      order[key] = value;
    });
    await order.save();
    return res.json({
      success: true,
      data: order
    });
  } catch (err) {
    return res.send({
      message:
        err.message || "Some error occurred while updating the Order."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    await Order.findByIdAndRemove(req.params.orderId);
    return res.json({
      success: true,
      data: true
    })
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.send({
        message: "Order not found with id " + req.params.orderId
      });
    }
    return res.status(500).send({
      message: "Could not delete Order with id " + req.params.orderId
    });
  }
};

exports.findOrdersByUserId = async (req, res) => {
  try {
    const order = await Order.find({ user: req.params.userId }).populate('book');
    if (!order) {
      return res.json({
        success: false,
        error: 'Order is not found'
      });
    }
    return res.json({
      success: true,
      data: order
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.send({
        message: "Order not found with id " + req.params.userId
      });
    }
    return res.send({
      message: "Error retrieving Order with id " + req.params.userId
    });
  }

};



