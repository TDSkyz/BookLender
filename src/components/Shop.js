import React, { Component } from 'react';

export default class Shop extends Component {
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
                  <div className="col-md-3 product-men">
                    <div className="product-chr-info chr">
                      <div className="thumbnail">
                        <a href="single_product.html">
                          <img src="images/lib8.jpg" alt />
                        </a>
                      </div>
                      <div className="caption">
                        <h4>be creative</h4>
                        <p>Clayton Barton</p>
                        <div className="matrlf-mid">
                          <ul className="rating">
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star gray-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star gray-star" aria-hidden="true" />
                              </a>
                            </li>
                          </ul>
                          <ul className="price-list">
                            <li>$ 100.00</li>
                            <li>
                              $200.00
                          </li>
                          </ul>
                          <div className="clearfix"> </div>
                        </div>
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="chr_item" defaultValue="Book1" />
                          <input type="hidden" name="amount" defaultValue={100.00} />
                          <button type="submit" className="chr-cart pchr-cart">Add to cart
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 product-men">
                    <div className="product-chr-info chr">
                      <div className="thumbnail">
                        <a href="single_product.html">
                          <img src="images/lib7.jpg" alt />
                        </a>
                      </div>
                      <div className="caption">
                        <h4>marketing</h4>
                        <p>Niel Fontine</p>
                        <div className="matrlf-mid">
                          <ul className="rating">
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star gray-star" aria-hidden="true" />
                              </a>
                            </li>
                          </ul>
                          <ul className="price-list">
                            <li>$ 200.00</li>
                            <li>
                              $250.00
                          </li>
                          </ul>
                          <div className="clearfix"> </div>
                        </div>
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="chr_item" defaultValue="Book2" />
                          <input type="hidden" name="amount" defaultValue={200.00} />
                          <button type="submit" className="chr-cart pchr-cart">Add to cart
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 product-men">
                    <div className="product-chr-info chr">
                      <div className="thumbnail">
                        <a href="single_product.html">
                          <img src="images/lib3.jpg" alt />
                        </a>
                      </div>
                      <div className="caption">
                        <h4>work from home</h4>
                        <p>Jose portilla</p>
                        <div className="matrlf-mid">
                          <ul className="rating">
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fa fa-star yellow-star" aria-hidden="true" />
                              </a>
                            </li>
                          </ul>
                          <ul className="price-list">
                            <li>$ 80.00</li>
                            <li>
                              $100.00
                          </li>
                          </ul>
                          <div className="clearfix"> </div>
                        </div>
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="chr_item" defaultValue="Book3" />
                          <input type="hidden" name="amount" defaultValue={80.00} />
                          <button type="submit" className="chr-cart pchr-cart">Add to cart
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
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
      </div>


    )
  }
}