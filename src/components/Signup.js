import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Login extends Component {
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
        <div className="login-form section text-center">
          <div className="container">
            <h4 className="rad-txt">
              <span className="abtxt1">
                <Link to="/login">Log In</Link>
              </span>
              <span className="abtext">
                <Link to="/signup">Sign Up</Link>
              </span>
            </h4>
            <div id="signupbox" style={{ marginTop: '50px' }} className="mainbox loginbox">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <div className="panel-title">Sign Up</div>
                  <div style={{ float: 'right', fontSize: '85%', position: 'relative', top: '-10px' }}>
                    <Link to="/login" id="signinlink">Login</Link>
                  </div>
                </div>
                <div className="panel-body">
                  <form id="signupform" className="form-horizontal" action="#" method="post">
                    <div className="form-group">
                      <label className="col-md-3 col-sm-3 col-xs-3 control-label">Email</label>
                      <div className="col-md-9 col-sm-9 col-xs-9">
                        <input type="text" className="form-control" name="email" placeholder="Email Address" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 col-sm-3 col-xs-3 control-label">First Name</label>
                      <div className="col-md-9 col-sm-9 col-xs-9">
                        <input type="text" className="form-control" name="firstname" placeholder="First Name" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 col-sm-3 col-xs-3 control-label">Last Name</label>
                      <div className="col-md-9 col-sm-9 col-xs-9">
                        <input type="text" className="form-control" name="lastname" placeholder="Last Name" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 col-sm-3 col-xs-3 control-label">Password</label>
                      <div className="col-md-9 col-sm-9 col-xs-9">
                        <input type="password" className="form-control" name="passwd" placeholder="Password" required />
                      </div>
                    </div>
                    <div className="form-group">
                      {/* Button */}
                      <div className="signup-btn">
                        <button id="btn-signup" type="button" className="btn btn-info">
                          <i className="icon-hand-right" /> &nbsp; Sign Up</button>
                      </div>
                    </div>
                    <div style={{ borderTop: '1px solid #999', paddingTop: '20px' }} className="form-group">
                      <div className="f-btn">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}