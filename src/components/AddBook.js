import React, { Component } from 'react';
import axiosInstance from '../helper/baseUrl';

export default class AddBook extends Component {

  constructor(props) {
    super(props)
    this.handleAddBook = this.handleAddBook.bind(this)
  }

  handleAddBook(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    axiosInstance.post('/books', data, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((response) => {
      console.log(response);
      // if (response.data.data) {
      //   alert("Add Success, Return To Shop")
      //   this.props.history.push('/shop');
      // }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div className="banner-bg-inner">
          {/* banner-text */}
          <div className="banner-text-inner">
            <div className="container">
              <h2 className="title-inner">
                world of reading
              </h2>
            </div>
          </div>
          {/* //banner-text */}
        </div>
        <div className="innerf-pages section">
          <div className="container">
            <div className="col-md-4 single-right-left ">
              <div className="grid images_3_of_2">
                <div className="flexslider1">
                  <ul className="slides">
                    <li data-thumb="images/s1.jpg">
                      <div className="thumb-image">
                        <img className="img-responsive" /> </div>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="col-md-8 single-right-left simpleCart_shelfItem">
              <form onSubmit={this.handleAddBook} className="form-horizontal" encType="multipart/form-data">
                <label htmlFor="username">Name Of Book</label>
                <br />
                <input name="name" type="text" />
                <br />
                <label htmlFor="username">Author</label>
                <br />
                <input name="author" type="text" />
                <br />
                <label>Description</label>
                <br />
                <textarea name="description" cols="45" rows="5" />
                <br />
                <label htmlFor="username">Price</label>
                <br />
                <input name="price" type="text" />
                <br />
                <label htmlFor="username">Image</label>
                <br />
                <input type="file" accept="image/*" name="image" />
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    )
  }
}