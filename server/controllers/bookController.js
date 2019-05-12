// const Book = require('../models/bookModel');
// // const Order = require('../models/orderModel');
const mongoose = require('mongoose');
const Book = mongoose.model('Book');
const Order = mongoose.model('Order');
const sharp = require('sharp');
var fs = require('fs');


exports.create = async (req, res) => {
  try {
    if (!req.body) {
      return res.send({
        message: "Book content can not be empty",
      });
    }
    sharp(req.file.path)
      .resize(250, 320)
      .toBuffer()
      .then(data => {
        fs.writeFileSync(req.file.path, data);
      })
      .catch(err => {
        return res.send({
          message: "Image Error",
        })
      });
    const book = await new Book(req.body);
    book.image = "/images/" + req.file.filename;
    await book.save();
    return res.json({
      success: true,
      data: book
    });
  } catch (err) {
    return res.send({
      message:
        err.message || "Some error occurred while creating the Book."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const books = await Book.find();
    return res.json({
      success: true,
      data: books
    });
  } catch (err) {
    return res.status(404).send({
      message:
        err.message || "Some error occurred while creating the Book."
    });
  };
};

exports.findOne = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) {
      return res.json({
        success: false,
        error: 'Book is not found'
      });
    }
    return res.json({
      success: true,
      data: book
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.send({
        message: "Book not found with id " + req.params.bookId
      });
    }
    return res.send({
      message: "Error retrieving Book with id " + req.params.bookId
    });
  }
};

exports.update = async (req, res) => {
  try {
    console.log(req.body);
    const book = await Book.findById(req.params.bookId);
    if (req.body._id) {
      delete req.body._id;
    }
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      book[key] = value;
    });
    await book.save();
    return res.json({
      success: true,
      data: book
    });
  } catch (err) {
    return res.send({
      message:
        err.message || "Some error occurred while updating the Book."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    await Order.deleteMany({ book: req.params.bookId });
    await Book.findByIdAndRemove(req.params.bookId);
    return res.json({
      success: true,
      data: true
    })
  } catch (err) {
    console.log(err);
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.send({
        message: "Book not found with id " + req.params.bookId
      });
    }
    return res.status(500).send({
      message: "Could not delete Book with id " + req.params.bookId
    });
  }
};

exports.test = async (req, res) => {
  try {
    console.log(req.file);
  } catch (err) {
    console.log(err);
  }
}