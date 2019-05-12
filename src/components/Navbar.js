import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(event) {
    localStorage.clear();
    window.location.reload();

  }

  render() {
    const isLoggedIn = localStorage.getItem('firstname');
    let username;
    let logout;
    if (isLoggedIn) {
      username = <li><a>Welcome {localStorage.getItem('firstname')}</a></li>
      logout = (
        <li>
          <a href="/login" onClick={this.handleLogout} title="Sign Out">
            <span className="fa fa-sign-out nav-icon" aria-hidden="true" />
          </a>
        </li>)
    };



    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="main-nav">
          <div className="container">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Chronicle</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <h1>
                <a href="/" className="navbar-brand">Chronicle</a>
              </h1>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-ex1-collapse nav-right">
              <ul className="nav navbar-nav navbar-left cl-effect-15">
                {/* Hidden li included to remove active class from about link when scrolled up past about section */}
                <li className="hidden">
                  <a className="page-scroll" href="#page-top" />
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="shop">Shop</a>
                </li>
                <li>
                  <a href="about">About us</a>
                </li>
                {username}
                <li>
                  <a href="login" title="SignIn & SignUp">
                    <span className="fa fa-user nav-icon" aria-hidden="true" />
                  </a>
                </li>
                {logout}
              </ul>


              {/* search-bar */}
              <div className="search-bar-agileits">
                <div className="cd-main-header">
                  <ul className="cd-header-buttons">
                    <li>
                      <a className="cd-search-trigger" href="#cd-search">
                        <span />
                      </a>
                    </li>
                  </ul>
                  {/* cd-header-buttons */}
                </div>
                <div id="cd-search" className="cd-search">
                  <form action="#" method="post">
                    <input name="Search" type="search" placeholder="Type and Hit Enter..." />
                  </form>
                </div>
              </div>
              {/* //search-bar ends here */}
              {/* shopping cart */}
              <div className="cart-mainf">
                <div className="chrcart chrcart2 cart cart box_1">
                  <a href="/orders">
                    <button className="top_chr_cart" type="submit" name="submit" value>
                      <i className="fa fa-cart-arrow-down" aria-hidden="true" />
                    </button>
                  </a>

                </div>
              </div>
              {/* //shopping cart ends here */}
            </div>

            {/* /.navbar-collapse */}
            <div className="clearfix" />
          </div>
          {/* /.container */}
        </div>
      </nav>)
  };
};