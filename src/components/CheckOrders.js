import React, { Component } from 'react';
import axiosInstance from '../helper/baseUrl';

export default class CheckOrders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem('userId'));
    axiosInstance
      .get('/orders/user/' + localStorage.getItem('userId'))
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            data: response.data.data
          }
        })
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var listOrders = this.state.data.map(order => (
      <tr key={order._id} className="rem1">
        <td className="invert">{order._id}</td>
        <td className="invert-image">
          <a href="single_product.html">
            <img src={order.book.image} alt={order.book.image} className="img-responsive" />
          </a>
        </td>
        <td className="invert">{order.book.name}</td>
        <td className="invert">{order.days} </td>
        <td className="invert">{order.book.price}</td>
        <td className="invert">{order.days * parseInt(order.book.price, 10)}</td>
      </tr>
    ));

    return (
      <div>
        {/* banner */}
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
        {/* //banner */}
        <div className="innerf-pages section">
          <div className="container">
            <div className="privacy about">
              <h4 className="rad-txt">
                <span className="abtxt1">review</span>
                <span className="abtext">your order</span>
              </h4>
              <div className="checkout-right">
                <h4>Your shopping cart contains:
                <span>{this.state.data.length} Products</span>
                </h4>
                <table className="timetable_sub table-responsive">
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Product</th>
                      <th>Product Name</th>
                      <th>Days</th>
                      <th>Price/Day</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOrders}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};