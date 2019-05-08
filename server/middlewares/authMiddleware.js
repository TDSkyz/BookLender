var { jwtSecret } = require('../config/jwtConfig');
var jwt = require('jsonwebtoken');

exports.isAuth = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (!token) {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    })
  }
};