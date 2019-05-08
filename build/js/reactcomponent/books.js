'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  componentDidMount(props){
    axios.get('localhost:8080/books').then(function (response){
      console.log(response);
    });
  };
  welcome(params) {
    console.log('hello');
    axios.get('localhost:8080/books').then(function (response){
      console.log(response);
    });
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

  

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

