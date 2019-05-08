import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-bottom section">
          <div className="container">
            {/* newsletter */}
            {/* footer social */}
            <div className="footer-social text-center">
              <h4>stay connected</h4>
              <ul>
                <li>
                  <a href="#">
                    <span className="fa fa-facebook icon_facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-twitter icon_twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-dribbble icon_dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-google-plus icon_g_plus" />
                  </a>
                </li>
              </ul>
            </div>
            {/* //footer social */}
          </div>
          {/* //footer container */}
        </div>
        {/* //footer */}
        <div className="cpy-right">
          <p>© 2018 Chronicle. All rights reserved | Design by
          <a href="http://w3layouts.com"> W3layouts.</a>
          </p>
        </div>
      </div>
    )
  }
}