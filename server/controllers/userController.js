'use strict';

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var User = require('../models/userModel');
var { jwtSecret } = require('../config/jwtConfig');

exports.register = async function (req, res) {
  try {
    var newUser = await new User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    await newUser.save()
    return res.status(200).json({
      success: true,
      data: newUser
    });
  } catch (err) {
    return res.status(500).send({
      message:
        err.stack || "Some error occurred while creating the User."
    });
  }
};

exports.login = async (req, res) => {
  try {
    var user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).json({ message: 'User is not found' });
    }
    if (!user.comparePassword(req.body.password)) {
      return res.status(404).json({ message: 'Wrong Password'});
    } else {
      var payload = { email: user.email, firstName: user.firstName, id: user._id, isAdmin: user.isAdmin }
      var token = jwt.sign(payload, jwtSecret, { expiresIn: '12h' });
      return res.json({ token: token, success: true, message: 'Authentication Successful' })
    }
  } catch (err) {
    return res.status(404).json("Error !! Try Again");
  }
};

exports.index = (req, res) => {

  return res.json({
    success: true,
    data: req.decoded
  });
}