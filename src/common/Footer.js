import React, { Component } from 'react'
// import './Footer.css'
export default class Footer extends Component {

  render() {
    return (
        <footer id="footer">
        <a className="goToTop font-additional color-main text-uppercase" href="#" id="scrollTop">
          <i className="fa fa-angle-up" />
          <span>Top</span>
        </a>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 clearfix wow fadeInLeft" data-wow-delay="0.3s">
                <a href="index.html" className="footer-top_logo" />
                <div className="footer-top_container clearfix">
                  <span className="font-main font-weight-normal color-additional">Proin est Pellentesque risus magna vulput vitae sodales uam morbi non sem lacus por mollis. Nunc condime ntum metus eud Ino lestie. Sed consectetuer. Lorem ipsum dolor amet ectetur adipisicing elit sed doincl.</span>
                  <ul className="footer-social-list">
                    <li><a href="#"><span className="social_facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><span className="social_twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><span className="social_googleplus" aria-hidden="true" /></a></li>
                    <li><a href="#"><span className="social_pinterest" aria-hidden="true" /></a></li>
                    <li><a href="#"><span className="social_youtube" aria-hidden="true" /></a></li>
                    <li><a href="#"><span className="social_instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 clearfix wow fadeInUp" data-wow-delay="0.3s">
                <h4 className="footer-top_title color-main font-additional font-weight-bold text-uppercase">QUICK LINKS</h4>
                <div className="footer-top_container clearfix">
                  <ul className="footer-nav">
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> My Account</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Order History</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> My Wishlist</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Order Tracking</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Shipping Information</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Gift Vouchers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 clearfix wow fadeInUp" data-wow-delay="0.3s">
                <h4 className="footer-top_title color-main font-additional font-weight-bold text-uppercase">INFORMATION</h4>
                <div className="footer-top_container clearfix">
                  <ul className="footer-nav">
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> About us</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Delivery Information</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Terms &amp; Conditions</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Privacy Policy</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Contact us</a></li>
                    <li><a href="#" className="font-main font-weight-normal color-additional"><i className="fa fa-angle-right customColor" /> Return Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 clearfix wow fadeInRight" data-wow-delay="0.3s">
                <h4 className="footer-top_title color-main font-additional font-weight-bold text-uppercase">GET IN TOUCH</h4>
                <div className="footer-top_container clearfix">
                  <ul className="footer-contact">
                    <li className="font-main font-weight-normal color-additional">
                      <span className="icon_pin" aria-hidden="true" />
                      23 Zevra Hall, Luton Street <br />New York 226688
                    </li>
                    <li className="font-main font-weight-normal color-additional oneLine">
                      <span className="icon_phone" aria-hidden="true" />
                      +10 (987) 6541 023
                    </li>
                    <li className="font-main font-weight-normal color-additional oneLine">
                      <span className="icon_mail" aria-hidden="true" />
                      info@templines.com
                    </li>
                    <li className="font-main font-weight-normal color-additional">
                      <span className="icon_clock" aria-hidden="true" />
                      Mon to Sat : 9:25 AM - 7:30 PM <br />Sun : 11:30 PM - 4:30 PM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 clearfix">
                <span className="footer_copyright color-additional font-main font-weight-light wow fadeInLeft" data-wow-delay="0.3s">Created With <span className="icon_heart customColor" aria-hidden="true" /> by <span className="font-main font-weight-semibold">Templines</span> © 2015 All rights reserved.</span>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 clearfix">
                <ul className="footer-payments pull-right wow fadeInRight" data-wow-delay="0.3s">
                  <li><img src="assets/media/payments/1.jpg" alt="Payments" /></li>
                  <li><img src="assets/media/payments/2.jpg" alt="Payments" /></li>
                  <li><img src="assets/media/payments/3.jpg" alt="Payments" /></li>
                  <li><img src="assets/media/payments/4.jpg" alt="Payments" /></li>
                  <li><img src="assets/media/payments/5.jpg" alt="Payments" /></li>
                  <li><img src="assets/media/payments/6.jpg" alt="Payments" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
