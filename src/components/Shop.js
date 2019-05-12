import React, { Component } from 'react';
import axiosInstance from '../helper/baseUrl';
import { Link } from 'react-router-dom';

export default class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handleDelete(id, event) {
    axiosInstance
      .delete('/books/' + id, 
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then((response) => {
        if (response.data.success === true) {
          alert('Delete Succesful');
          this.componentDidMount();
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    axiosInstance
      .get('/books')
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            data: response.data.data
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    let listBooks
    var isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === "true") {
      var addBook = (
        <div className="col-md-3 product-men">
          <div className="product-chr-info chr">
            <div className="thumbnail">
              <Link to={"/addbook"}>
                <img src="/images/Add.jpg" resizeMode="contain" width="250" height="320" alt="" />
              </Link>

            </div>
            <div className="caption">
              <h4>You Can Add More Book Here</h4>
            </div>
          </div>
        </div>
      );
      listBooks = this.state.data.map(book => (
        <div key={book._id} className="col-md-3 product-men">
          <div className="product-chr-info chr">
            <div className="thumbnail">
              <Link to={"/shop/" + book._id}>
                <img src={book.image} alt={book.image} />
              </Link>

            </div>
            <div className="caption">
              <h4>{book.name}</h4>
              <p>{book.author}</p>
              <div className="matrlf-mid">
                <ul className="price-list">
                  <li>{book.price}/day</li>
                  <li></li>
                </ul>
                <div className="clearfix"> </div>
              </div>
              <a href={"/edit/" + book._id} >
                <button className="chr-cart pchr-cart">Edit
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </button>
              </a>
              <button onClick={event => this.handleDelete(book._id, event)} className="chr-cart pchr-cart">delete
              <i className="fa fa-trash" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ));
    } else {
      listBooks = this.state.data.map(book => (
        <div key={book._id} className="col-md-3 product-men">
          <div className="product-chr-info chr">
            <div className="thumbnail">
              <Link to={"/shop/" + book._id}>
                <img src={book.image} alt={book.image} />
              </Link>

            </div>
            <div className="caption">
              <h4>{book.name}</h4>
              <p>{book.author}</p>
              <div className="matrlf-mid">
                <ul className="price-list">
                  <li>{book.price}/day</li>
                  <li></li>
                </ul>
                <div className="clearfix"> </div>
              </div>
              <a href={"/shop/" + book._id} >
                <button className="chr-cart pchr-cart">See More Details
              <i className="fa fa-plus" aria-hidden="true" />
                </button>
              </a>
            </div>
          </div>
        </div>
      ));
    }



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
          <div className="container-cart">
            {/* product left */}
            <div className="side-bar col-md-3">
              {/*preference */}
              <div className="left-side">
                <h3 className="shopf-sear-headits-sear-head">
                  Categories</h3>
                <ul>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Biographies</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Fiction</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Management</span>
                  </li>
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Business</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* //product left */}
            {/* product right */}
            <div className="left-ads-display col-md-9">
              <div className="wrapper_top_shop">
                {/* product-sec1 */}
                <div className="product-sec1">
                  {/* row1*/}
                  {addBook}
                  {listBooks}
                  {/* //row1 */}
                  <div className="clearfix" />
                </div>
                {/* //product-sec1 */}
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <img src="/images/lib6"></img>
      </div>
    )
  }
}