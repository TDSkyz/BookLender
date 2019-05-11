'use strict';

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var User = require('../models/userModel');
var { jwtSecret } = require('../config/jwtConfig');

exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({
      success: true,
      data: users
    });
  } catch (err) {
    return res.status(404).send({
      message:
        err.message || "Some error occurred while creating the Order."
    });
  };
};
exports.register = async function (req, res) {
  try {
    console.log(req.body);

    var user = await User.findOne({ 'email': req.body.email });
    if (user) {
      return res.json({
        success: false,
        message: "Email already exist"
      })
    }
    var newUser = await new User(req.body);
    if (!req.body.isAdmin) {
      newUser.isAdmin = false;
    }
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    await newUser.save()
    return res.json({
      success: true,
      message: "Create Success, You can Login now",
      data: newUser
    });
  } catch (err) {
    return res.send({
      error:
        err.stack || "Some error occurred while creating the User."
    });
  }
};

exports.login = async (req, res) => {
  try {

    var user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.json({ message: 'User is not found' });
    }
    if (!user.comparePassword(req.body.password)) {
      return res.json({ message: 'Wrong Password' });
    } else {
      var payload = { email: user.email, firstName: user.firstName, id: user._id, isAdmin: user.isAdmin }
      var token = jwt.sign(payload, jwtSecret, { expiresIn: '12h' });
      return res.json({ token: token, success: true, userId: user._id, firstName: user.firstName, isAdmin: user.isAdmin, message: 'Authentication Successful' })
    }
  } catch (err) {
    return res.json("Error !! Try Again");
  }
};

exports.index = (req, res) => {

  return res.json({
    success: true,
    data: req.decoded
  });
}