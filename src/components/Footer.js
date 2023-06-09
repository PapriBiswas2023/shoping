import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            {/* Footer Area start */}
          <footer className="footer-area">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  {/* footer single wedget */}
                  <div className="col-md-6 col-lg-4">
                    {/* footer logo */}
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/images/logo/footer-logo.png" alt="" />
                      </a>
                    </div>
                    {/* footer logo */}
                    <div className="about-footer">
                      <p className="text-info">
                        We are a team of designers and developers that create
                        high quality HTML template
                      </p>
                      <div className="need-help">
                        <p className="phone-info">
                          NEED HELP?
                          <span>
                            (+800) 345 678 <br />
                            (+800) 123 456
                          </span>
                        </p>
                      </div>
                      <div className="social-info">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="ion-social-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-google" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* footer single wedget */}
                  <div className="col-md-6 col-lg-2 mt-res-sx-30px mt-res-md-30px">
                    <div className="single-wedge">
                      <h4 className="footer-herading">Information</h4>
                      <div className="footer-links">
                        <ul>
                          <li>
                            <a href="#">Delivery</a>
                          </li>
                          <li>
                            <Link to="/about">About Us</Link>
                          </li>
                          <li>
                            <a href="#">Secure Payment</a>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                          <li>
                            <a href="#">Sitemap</a>
                          </li>
                          <li>
                            <a href="#">Stores</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* footer single wedget */}
                  <div className="col-md-6 col-lg-2 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
                    <div className="single-wedge">
                      <h4 className="footer-herading">Custom Links</h4>
                      <div className="footer-links">
                        <ul>
                          <li>
                            <a href="#">Legal Notice</a>
                          </li>
                          <li>
                            <a href="#">Prices Drop</a>
                          </li>
                          <li>
                            <a href="#">New Products</a>
                          </li>
                          <li>
                            <a href="#">Best Sales</a>
                          </li>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/my-account">My Account</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* footer single wedget */}
                  <div className="col-md-6 col-lg-4 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
                    <div className="single-wedge">
                      <h4 className="footer-herading">Newsletter</h4>
                      <div className="subscrib-text">
                        <p>
                          You may unsubscribe at any moment. For that purpose,
                          please find our contact info in the legal notice.
                        </p>
                      </div>
                      <div id="mc_embed_signup" className="subscribe-form">
                        <form
                          id="mc-embedded-subscribe-form"
                          className="validate"
                          noValidate
                          target="_blank"
                          name="mc-embedded-subscribe-form"
                          method="post"
                          action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
                        >
                          <div id="mc_embed_signup_scroll" className="mc-form">
                            <input
                              className="email"
                              type="email"
                              required
                              placeholder="Enter your email here.."
                              name="EMAIL"
                              defaultValue
                            />
                            <div
                              className="mc-news"
                              aria-hidden="true"
                              style={{ position: "absolute", left: "-5000px" }}
                            >
                              <input
                                type="text"
                                defaultValue
                                tabIndex={-1}
                                name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                              />
                            </div>
                            <div className="clear">
                              <input
                                id="mc-embedded-subscribe"
                                className="button"
                                type="submit"
                                name="subscribe"
                                defaultValue="Sign Up"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="img_app">
                        <a href="#">
                          <img src="assets/images/icons/app_store.png" alt="" />
                        </a>
                        <a href="#">
                          <img
                            src="assets/images/icons/google_play.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* footer single wedget */}
                </div>
              </div>
            </div>
            {/*  Footer Bottom Area start */}
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-5 text-center text-md-start order-2 order-md-1 mt-4 mt-md-0">
                    <p className="copy-text">
                      Copyright ©{" "}
                      <a href="https://hasthemes.com/"> HasThemes</a>. All
                      Rights Reserved
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-7 text-center text-md-end order-1 order-md-2">
                    <img
                      className="payment-img"
                      src="assets/images/icons/payment.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  Footer Bottom Area End*/}
          </footer>
          {/*  Footer Area End */}
        </div>
    )
}
