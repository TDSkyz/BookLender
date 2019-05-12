import React, { Component } from 'react';
import axiosInstance from '../helper/baseUrl';

export default class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      description: "",
      price: "",
      image: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    var value = event.target.value;
    console.log(value);
    this.setState({
      days: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axiosInstance.put('/books/' + this.props.match.params.bookId, {
      name: this.state.name,
      author: this.state.author,
      description: this.state.description,
      price: this.state.price
    }, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log(response);
        alert("Edit Success, Return To Shop")
        this.props.history.push('/shop');
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
            name: response.data.data.name,
            author: response.data.data.author,
            description: response.data.data.description,
            price: response.data.data.price,
            image: response.data.data.image
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
                        <img src={this.state.image} data-imagezoom="true" alt={this.state.image} className="img-responsive" /> </div>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="col-md-8 single-right-left simpleCart_shelfItem">

              <form onSubmit={this.handleSubmit} className="form-horizontal" encType="multipart/form-data">
                <label htmlFor="username" >Name Of Book</label>
                <br />
                <input name="name" type="text" value={this.state.name || ''} onChange={this.handleInputChange} />
                <br />
                <label htmlFor="username">Author</label>
                <br />
                <input name="author" type="text" value={this.state.author || ''} onChange={this.handleInputChange} />
                <br />
                <label>Description</label>
                <br />
                <textarea name="description" cols="45" rows="5" value={this.state.description || ''} onChange={this.handleInputChange} />
                <br />
                <label htmlFor="username">Price</label>
                <br />
                <input name="price" type="text" value={this.state.price || ''} onChange={this.handleInputChange} />
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