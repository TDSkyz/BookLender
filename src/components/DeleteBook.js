import React, { Component } from 'react';
import axiosInstance from '../helper/baseUrl';

export default class DeleteBook extends Component {
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
}