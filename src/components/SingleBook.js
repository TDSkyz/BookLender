import React, { Component } from 'react';
import axiosInstance from '../helper/baseUrl';

export default class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      days: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    var value = event.target.value;
    console.log(value);
    this.setState({
      days: value
    });
  }

  handleSubmit(event) {
    if (this.state.days === 0) {
      alert("Hire days should more than 0");
      return
    }
    axiosInstance.post('/orders', {
      user: localStorage.getItem('userId'),
      book: this.state.data._id,
      days: this.state.days
    }, { 
      headers: { 
        Authorization: localStorage.getItem('token') 
      } 
    })
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        alert("Your Order Is Successful, You Can Check On Cart");
        this.props.history.push('/orders');
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  UNSAFE_componentWillMount() {
    if (!localStorage.getItem('firstname')) {
      alert('Please Login To See This Content')
      return this.props.history.push('/login');
    }
  }

  componentDidMount() {
    axiosInstance
      .get('/books/' + this.props.match.params.bookId)
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
                        <img src={this.state.data.image} data-imagezoom="true" alt={this.state.data.image} className="img-responsive" /> </div>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="col-md-8 single-right-left simpleCart_shelfItem">
              <h3>{this.state.data.name}
              </h3>
              <p>by
                <a href="#">{this.state.data.author}</a>
              </p>
              <div className="caption">
                <div className="clearfix"> </div>

              </div>
              <div className="desc_single">
                <h5>Description</h5>
                <p>{this.state.data.description}</p>
              </div>
              <div className="clearfix" />
              <div className="occasion-cart">
                <div className="desc_single">
                  <h5>Price: {this.state.data.price}/day </h5>
                </div>
                <div className="chr single-item single_page_b">
                  <div>
                    <p>How many days do you want to hire ?</p>
                    <input
                      type="text"
                      value={this.state.days}
                      onChange={event => this.handleChange(event)}
                    />
                  </div>
                  <p>Total money is: {parseInt(this.state.data.price, 10) * this.state.days} $</p>
                  <button onClick={this.handleSubmit} className="chr-cart pchr-cart">
                    <i className="fa fa-cart-plus" aria-hidden="true" /> Hire Now</button>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    )
  }
}