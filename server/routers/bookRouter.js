var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController');
var authMiddleware = require('../middlewares/authMiddleware');
var path = require('path');

const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.dirname(require.main.filename) + '/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })

router
  .route('/books')
  .get(bookController.findAll)
  .post(upload.single('image'), authMiddleware.isAuth, bookController.create);

router
  .route('/books/:bookId')
  .get(bookController.findOne)
  .put(authMiddleware.isAuth, bookController.update)
  .delete(authMiddleware.isAuth, bookController.delete)


module.exports = router;