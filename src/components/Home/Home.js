import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            options: {
                loop: true,
                margin: 10,
                nav:true,
                responsive:{
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 5,
                    },
                },
            },
        }
    }
    // static propTypes = {
    //     prop: PropTypes
    // }

    // id="owl-main-slider" className="enable-owl-carousel owl-main-slider owl-carousel owl-theme" data-navigation="true" data-pagination="false" data-single-item="true" data-auto-play={7000} data-transition-style="fadeUp" data-main-text-animation="true" data-after-init-delay={4000} data-after-move-delay={500} data-stop-on-hover="true"

    // <div className="item slide1">
    //             <img src="assets/media/main-slider/1.jpg" alt="Slide 1" />
    //             <div className="main-slider_content">
    //               <div className="main-slider_smalltitle font-third main-slider_zoomIn animated" style={{visibility: 'hidden'}}><span className="customColor">New Winter Collection <i className="fa fa-circle" /></span> 2015 <span className="customColor"><i className="fa fa-circle" /></span> 2016</div>
    //               <h3 className="main-slider_title font-additional font-weight-bold text-shadow main-slider_fadeInLeft animated" style={{visibility: 'hidden'}}>BIGGEST SALE<br /> SPRING COLLECTION</h3>
    //               <div className="main-slider_row">
    //                 <div className="starSeparator main-slider_zoomIn animated" style={{visibility: 'hidden'}}>
    //                   <span aria-hidden="true" className="icon-star" />
    //                 </div>
    //               </div>
    //               <div className="main-slider_buttons">
    //                 <a href="#" className="btn button-border font-additional font-weight-bold hvr-rectangle-out main-slider_fadeInLeftBig animated hover-focus-bg before-bg" style={{visibility: 'hidden'}}>SHOP NOW</a>
    //                 <a href="#" className="btn button-border font-additional font-weight-bold hvr-rectangle-out main-slider_fadeInRightBig animated hover-focus-bg before-bg" style={{visibility: 'hidden'}}>PURCHASE</a>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="item slide2">
    //             <img src="assets/media/main-slider/2.jpg" alt="Slide 2" />
    //             <div className="main-slider_content">
    //               <div className="main-slider_row">
    //                 <div className="starSeparator main-slider_zoomIn animated" style={{visibility: 'hidden'}}>
    //                   <span aria-hidden="true" className="icon-star" />
    //                 </div>
    //               </div>
    //               <div className="main-slider_smalltitle font-third color-main main-slider_fadeInRight animated" style={{visibility: 'hidden'}}>NEW COLLECTION</div>
    //               <h3 className="main-slider_title font-additional font-weight-bold text-shadow color-main main-slider_fadeInLeft animated" style={{visibility: 'hidden'}}>AUTUMN WINTER 2015/2016</h3>
    //               <div className="main-slider_buttons">
    //                 <a href="#" className="btn button-border font-additional font-weight-bold hvr-rectangle-out main-slider_slideInUp animated hover-focus-bg before-bg" style={{visibility: 'hidden'}}>SHOP NOW</a>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="item slide3">
    //             <img src="assets/media/main-slider/3.jpg" alt="Slide 3" />
    //             <div className="main-slider_content">
    //               <div className="main-slider_smalltitle font-third main-slider_zoomIn animated" style={{visibility: 'hidden'}}><span className="customColor">New Trends <i className="fa fa-circle" /></span> 2015 <i className="fa fa-circle customColor" /> 2016</div>
    //               <h3 className="main-slider_title font-additional font-weight-normal text-shadow main-slider_fadeInLeft animated" style={{visibility: 'hidden'}}>style &amp; comfort</h3>
    //               <div className="main-slider_row">
    //                 <div className="starSeparator main-slider_zoomIn animated" style={{visibility: 'hidden'}}>
    //                   <span aria-hidden="true" className="icon-star" />
    //                 </div>
    //               </div>
    //               <span className="main-slider_desc font-main main-slider_fadeInRight animated" style={{visibility: 'hidden'}}>Proin est Pellentesque risus magna vulputate vitae sodales aliquam morb non sem lacus porta molis. Nunc condimentum metus</span>
    //               <div className="main-slider_buttons">
    //                 <a href="#" className="btn button-border font-additional font-weight-bold hvr-rectangle-out main-slider_slideInUp animated hover-focus-bg before-bg" style={{visibility: 'hidden'}}>SHOP NOW</a>
    //               </div>
    //             </div>
    //           </div>


    render() {

        return (
            <React.Fragment>
            <section id="main-slider">

            <Carousel autoPlay showThumbs={false}>
                <div>
                    <img src="assets/media/main-slider/1.jpg" />
                </div>
                <div>
                    <img src="assets/media/main-slider/2.jpg" />
                </div>
                <div>
                    <img src="assets/media/main-slider/3.jpg" />
                </div>
            </Carousel>

          </section>
          <section id="categories">
            <div className="container clearfix">
              <ul className="category-images">
                <li className="grid">
                  <figure className="effect-bubba wow fadeInLeft" data-wow-delay="0.3s">
                    <img src="assets/media/categories/1.jpg" alt="Category" />
                    <figcaption>
                      <div className="category-images_content">
                        <h2 className="font-third font-weight-light text-uppercase color-main">FOR WOMEN</h2>
                        <p className="font-additional font-weight-bold text-uppercase color-main line-text line-text_white">SPRING COLLECTION</p>
                      </div>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </li>
                <li className="grid left-space right-space">
                  <figure className="effect-bubba wow fadeInUp" data-wow-delay="0.3s">
                    <img src="assets/media/categories/2.jpg" alt="Category" />
                    <figcaption>
                      <div className="category-images_content">
                        <h2 className="font-third font-weight-light text-uppercase color-main">FOOT WEAR</h2>
                        <p className="font-additional font-weight-bold text-uppercase color-main line-text line-text_white">LATEST ARRIVALS</p>
                      </div>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </li>
                <li className="grid">
                  <figure className="effect-bubba wow fadeInRight" data-wow-delay="0.3s">
                    <img src="assets/media/categories/3.jpg" alt="Category" />
                    <figcaption>
                      <div className="category-images_content">
                        <h2 className="font-third font-weight-light text-uppercase color-main">FOR MEN</h2>
                        <p className="font-additional font-weight-bold text-uppercase color-main line-text line-text_white">TRENDS 2015</p>
                      </div>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </section>
          <section id="collection" className="borderTopSeparator">
            <div className="container relative">
              <div className="smallLogo" />
              <div className="isotopeBox">
                <h2 className="title font-additional font-weight-bold text-uppercase wow zoomIn">seven store</h2>
                <span className="subTitle font-additional font-weight-normal text-uppercase wow zoomIn">HOME OF AMAZING COLLECTION</span>
                <div className="starSeparatorBox clearfix">
                  <div className="starSeparator">
                    <span className="icon-star" aria-hidden="true" />
                  </div>
                  <ul id="filter" className="product-filter clearfix">
                    <li>
                      <a href="#" className="current btn font-additional font-weight-normal text-uppercase hover-focus-bg" data-filter=".newproducts">NEW PRODUCTS</a>
                    </li>
                    <li>
                      <a href="#" className="btn font-additional font-weight-normal text-uppercase hover-focus-bg" data-filter=".bestsellers">BEST SELLERS</a>
                    </li>
                    <li>
                      <a href="#" className="btn font-additional font-weight-normal text-uppercase hover-focus-bg" data-filter=".specials">SPECIALS</a>
                    </li>
                  </ul>
                  <div className="isotope-frame wow fadeInUp" data-wow-delay="0.3s">
                    <div className="isotope-filter">
                      <div className="isotope-item  newproducts specials">
                        <div className="product-item hvr-underline-from-center">
                          <div className="product-item_body">
                            <img className="product-item_image" src="assets/media/270x360/1.jpg" alt="Product" />
                            <a className="product-item_link" href="product-details.html">
                              <span className="product-item_sale color-main font-additional customBgColor circle">-15%</span>
                            </a>
                            <ul className="product-item_info transition">
                              <li>
                                <a href="#">
                                  <span className="icon-bag" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-eye" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-heart" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a href="product-details.html" className="product-item_footer">
                            <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">WOMEN CAP</div>
                            <div className="product-item_price font-additional font-weight-normal customColor">$240.00 <span>$265.00</span></div>
                          </a>
                        </div>
                      </div>
                      <div className="isotope-item  newproducts bestsellers">
                        <div className="product-item hvr-underline-from-center">
                          <div className="product-item_body">
                            <img className="product-item_image" src="assets/media/270x360/2.jpg" alt="Product" />
                            <a className="product-item_link" href="product-details.html">
                              <span className="product-item_new color-main font-additional text-uppercase circle">new</span>
                            </a>
                            <ul className="product-item_info transition">
                              <li>
                                <a href="#">
                                  <span className="icon-bag" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-eye" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-heart" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a href="product-details.html" className="product-item_footer">
                            <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">BLACK DRESS</div>
                            <div className="product-item_price font-additional font-weight-normal customColor">$560.00</div>
                          </a>
                        </div>
                      </div>
                      <div className="isotope-item  newproducts specials">
                        <div className="product-item hvr-underline-from-center">
                          <div className="product-item_body">
                            <img className="product-item_image" src="assets/media/270x360/3.jpg" alt="Product" />
                            <a className="product-item_link" href="product-details.html" />
                            <ul className="product-item_info transition">
                              <li>
                                <a href="#">
                                  <span className="icon-bag" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-eye" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-heart" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a href="product-details.html" className="product-item_footer">
                            <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">STYLISH WEAR</div>
                            <div className="product-item_price font-additional font-weight-normal customColor">$175.00</div>
                          </a>
                        </div>
                      </div>
                      <div className="isotope-item  newproducts bestsellers">
                        <div className="product-item hvr-underline-from-center">
                          <div className="product-item_body">
                            <img className="product-item_image" src="assets/media/270x360/4.jpg" alt="Product" />
                            <a className="product-item_link" href="product-details.html">
                              <span className="product-item_sale color-main font-additional customBgColor circle">-20%</span>
                              <span className="product-item_outofstock color-main font-additional circle">OUT OF STOCK</span>
                            </a>
                            <ul className="product-item_info transition">
                              <li>
                                <a href="#">
                                  <span className="icon-bag" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-eye" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-heart" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a href="product-details.html" className="product-item_footer">
                            <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">LEATHER JACKET</div>
                            <div className="product-item_price font-additional font-weight-normal customColor">$300.00</div>
                          </a>
                        </div>
                      </div>
                      <div className="isotope-item  bestsellers">
                        <div className="product-item hvr-underline-from-center">
                          <div className="product-item_body">
                            <img className="product-item_image" src="assets/media/270x360/5.jpg" alt="Product" />
                            <a className="product-item_link" href="product-details.html">
                              <span className="product-item_sale color-main font-additional customBgColor circle">-15%</span>
                            </a>
                            <ul className="product-item_info transition">
                              <li>
                                <a href="#">
                                  <span className="icon-bag" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-eye" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-heart" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a href="product-details.html" className="product-item_footer">
                            <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">WOMEN CAP</div>
                            <div className="product-item_price font-additional font-weight-normal customColor">$240.00 <span>$265.00</span></div>
                          </a>
                        </div>
                      </div>
                      <div className="isotope-item  specials">
                        <div className="product-item hvr-underline-from-center">
                          <div className="product-item_body">
                            <img className="product-item_image" src="assets/media/270x360/6.jpg" alt="Product" />
                            <a className="product-item_link" href="product-details.html">
                              <span className="product-item_new color-main font-additional text-uppercase circle">new</span>
                            </a>
                            <ul className="product-item_info transition">
                              <li>
                                <a href="#">
                                  <span className="icon-bag" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-eye" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-heart" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a href="product-details.html" className="product-item_footer">
                            <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">BLACK DRESS</div>
                            <div className="product-item_price font-additional font-weight-normal customColor">$560.00</div>
                          </a>
                        </div>
                      </div>
                      <div className="isotope-item  bestsellers">
                        <div className="product-item hvr-underline-from-center">
                          <div className="product-item_body">
                            <img className="product-item_image" src="assets/media/270x360/7.jpg" alt="Product" />
                            <a className="product-item_link" href="product-details.html" />
                            <ul className="product-item_info transition">
                              <li>
                                <a href="#">
                                  <span className="icon-bag" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-eye" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-heart" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a href="product-details.html" className="product-item_footer">
                            <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">STYLISH WEAR</div>
                            <div className="product-item_price font-additional font-weight-normal customColor">$175.00</div>
                          </a>
                        </div>
                      </div>
                      <div className="isotope-item specials">
                        <div className="product-item hvr-underline-from-center">
                          <div className="product-item_body">
                            <img className="product-item_image" src="assets/media/270x360/8.jpg" alt="Product" />
                            <a className="product-item_link" href="product-details.html">
                              <span className="product-item_sale color-main font-additional customBgColor circle">-20%</span>
                              <span className="product-item_outofstock color-main font-additional circle">OUT OF STOCK</span>
                            </a>
                            <ul className="product-item_info transition">
                              <li>
                                <a href="#">
                                  <span className="icon-bag" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-eye" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span className="icon-heart" aria-hidden="true" />
                                  <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a href="product-details.html" className="product-item_footer">
                            <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">LEATHER JACKET</div>
                            <div className="product-item_price font-additional font-weight-normal customColor">$300.00</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="discount" className="discount background-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 clearfix">
                  <img className="discount-image wow fadeInLeft" data-wow-delay="0.3s" src="assets/media/discount/1.png" alt="Discounts" />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix">
                  <div className="discount-info">
                    <span className="discount-info_small_txt font-third font-weight-bold text-uppercase wow fadeInRight" data-wow-delay="0.3s">BIG DISCOUNTS ON ALL</span>
                    <span className="discount-info_shadow_txt text-shadow font-additional font-weight-bold text-uppercase customColor wow fadeInRight" data-wow-delay="0.3s">WOMEN ACCESSORIES</span>
                    <span className="discount-info_right_txt text-right font-additional font-weight-bold text-uppercase wow fadeInLeft" data-wow-delay="0.3s">
                      <span className="arrow_right" aria-hidden="true" />
                      UPTO 30%
                    </span>
                    <a href="#" className="discount-info_link button-border font-additional font-weight-bold customBorderColor text-uppercase hvr-rectangle-out before-bg wow fadeInRight hover-focus-bg" data-wow-delay="0.3s">VIEW COLLECTION</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="slider" className="slider-container">
            <div className="container">
              <h2 className="title font-additional font-weight-bold text-uppercase wow zoomIn" data-wow-delay="0.3s">FRESH ARRIVALS</h2>
              <span className="subTitle font-additional font-weight-normal text-uppercase wow zoomIn" data-wow-delay="0.3s">SED FELIS PRAESENT DONEC BLAND</span>
              <div className="starSeparatorBox clearfix">
                <div className="starSeparator wow zoomIn" data-wow-delay="0.3s">
                  <span aria-hidden="true" className="icon-star" />
                </div>
{
            //     <Carousel showThumbs={false} centerSlidePercentage={80} selectedItem={4} swipeScrollTolerance={5}>
            //     <div className="product-item_body product-border">
            //         <img src="assets/media/270x320/1.jpg" />
            //     </div>
            //     <div className="product-item_body product-border">
            //         <img src="assets/media/270x320/2.jpg" />
            //     </div>
            //     <div className="product-item_body product-border">
            //         <img src="assets/media/270x320/3.jpg" />
            //     </div>
            //     <div className="product-item_body product-border">
            //     <img src="assets/media/270x320/4.jpg" />
            // </div>

            //     <div className="product-item_body product-border">
            //     <img src="assets/media/270x320/2.jpg" />
            // </div>

            //     </Carousel>
}

    <OwlCarousel className="owl-theme" loop margin={10} nav dots={false} autoplay={true}>
      <div className="item">
      <div className="product-item hvr-underline-from-center">
        <div className="product-item_body product-border">
          <img alt="Product" src="assets/media/270x320/1.jpg" className="product-item_image" />
          <a href="product-details.html" className="product-item_link">
            <span className="product-item_sale color-main font-additional customBgColor circle">-20%</span>
          </a>
          <ul className="product-item_info transition">
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-bag" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-eye" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-heart" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
              </a>
            </li>
          </ul>
        </div>
        <a className="product-item_footer" href="product-details.html">
          <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">WOMEN CAP</div>
          <div className="product-item_price font-additional font-weight-normal customColor">$240.00 <span>$265.00</span></div>
        </a>
      </div>
    </div>
    <div className="item">
      <div className="product-item hvr-underline-from-center">
        <div className="product-item_body product-border">
          <img alt="Product" src="assets/media/270x320/2.jpg" className="product-item_image" />
          <a href="product-details.html" className="product-item_link">
            <span className="product-item_new color-main font-additional text-uppercase circle">new</span>
          </a>
          <ul className="product-item_info transition">
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-bag" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-eye" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-heart" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
              </a>
            </li>
          </ul>
        </div>
        <a className="product-item_footer" href="product-details.html">
          <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">BLACK DRESS</div>
          <div className="product-item_price font-additional font-weight-normal customColor">$560.00</div>
        </a>
      </div>
    </div>
    <div className="item">
      <div className="product-item hvr-underline-from-center">
        <div className="product-item_body product-border">
          <img alt="Product" src="assets/media/270x320/3.jpg" className="product-item_image" />
          <a href="product-details.html" className="product-item_link">
            <span className="product-item_outofstock color-main font-additional circle">OUT OF STOCK</span>
          </a>
          <ul className="product-item_info transition">
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-bag" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-eye" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-heart" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
              </a>
            </li>
          </ul>
        </div>
        <a className="product-item_footer" href="product-details.html">
          <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">STYLISH WEAR</div>
          <div className="product-item_price font-additional font-weight-normal customColor">$175.00</div>
        </a>
      </div>
    </div>
    <div className="item">
      <div className="product-item hvr-underline-from-center">
        <div className="product-item_body product-border">
          <img alt="Product" src="assets/media/270x320/4.jpg" className="product-item_image" />
          <a href="product-details.html" className="product-item_link">
            <span className="product-item_sale color-main font-additional customBgColor circle">-20%</span>
          </a>
          <ul className="product-item_info transition">
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-bag" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-eye" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-heart" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
              </a>
            </li>
          </ul>
        </div>
        <a className="product-item_footer" href="product-details.html">
          <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">LEATHER JACKET</div>
          <div className="product-item_price font-additional font-weight-normal customColor">$300.00</div>
        </a>
      </div>
    </div>
    <div className="item">
      <div className="product-item hvr-underline-from-center">
        <div className="product-item_body product-border">
          <img alt="Product" src="assets/media/270x320/2.jpg" className="product-item_image" />
          <a href="product-details.html" className="product-item_link">
            <span className="product-item_sale color-main font-additional customBgColor circle">-15%</span>
          </a>
          <ul className="product-item_info transition">
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-bag" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">ADD TO CART</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-eye" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">QUICK VIEW</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="icon-heart" />
                <div className="product-item_tip font-additional font-weight-normal text-uppercase customBgColor color-main transition">Add to Favorites</div>
              </a>
            </li>
          </ul>
        </div>
        <a className="product-item_footer" href="product-details.html">
          <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">STYLISH WEAR</div>
          <div className="product-item_price font-additional font-weight-normal customColor">$175.00</div>
        </a>
      </div>
    </div>
    </OwlCarousel>
              </div>

            </div>
          </section>
          <section id="previewInfo" className="borderTopSeparator">
            <div className="container relative blog-preview">
              <div className="smallLogo" />
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 clearfix">
                  <h3 className="title-primary font-additional font-weight-bold text-uppercase wow zoomIn" data-wow-delay="0.3s">FROM BLOG</h3>
                  <div className="starSeparator wow zoomIn" data-wow-delay="0.3s">
                    <span className="icon-star" aria-hidden="true" />
                  </div>
                  <div className="blog-preview_item wow fadeInUp" data-wow-delay="0.3s">
                    <a href="blog-post.html" className="blog-preview_image">
                      <img src="assets/media/340x150/1.jpg" alt="Blog Post" />
                      <div className="blog-preview_posted">
                        <span className="blog-preview_date font-additional font-weight-bold text-uppercase">15 FEB</span>
                        <span className="blog-preview_comments font-additional font-weight-normal text-uppercase">15 COMMENTS</span>
                      </div>
                    </a>
                    <div className="blog-preview_info">
                      <h4 className="blog-preview_title font-additional font-weight-bold text-uppercase">MAURIS EST LACUS FRINGILLA SED VEHIC TAE</h4>
                      <div className="blog-preview_desc font-main font-weight-normal">Proin est elentesque risus magna vulputate vitae sodales uam morbi non sem lacus porta mollis nunc condime.</div>
                      <a className="blog-preview_btn button-border font-additional font-weight-normal before-bg text-uppercase hvr-rectangle-out hover-focus-bg" href="blog-post.html">MORE</a>
                    </div>
                  </div>
                  <div className="blog-preview_item wow fadeInUp" data-wow-delay="0.3s">
                    <a href="blog-post.html" className="blog-preview_image">
                      <img src="assets/media/340x150/2.jpg" alt="Blog Post" />
                      <div className="blog-preview_posted">
                        <span className="blog-preview_date font-additional font-weight-bold text-uppercase">15 FEB</span>
                        <span className="blog-preview_comments font-additional font-weight-normal text-uppercase">15 COMMENTS</span>
                      </div>
                    </a>
                    <div className="blog-preview_info">
                      <h4 className="blog-preview_title font-additional font-weight-bold text-uppercase">PRAESENT LOREM PELLENTESQUE SAPIEN</h4>
                      <div className="blog-preview_desc font-main font-weight-normal">Proin est elentesque risus magna vulputate vitae sodales uam morbi non sem lacus porta mollis nunc condime.</div>
                      <a className="blog-preview_btn button-border font-additional font-weight-normal before-bg text-uppercase hvr-rectangle-out hover-focus-bg" href="blog-post.html">MORE</a>
                    </div>
                  </div>
                  <div className="blog-preview_item wow fadeInUp" data-wow-delay="0.3s">
                    <a href="blog-post.html" className="blog-preview_image">
                      <img src="assets/media/340x150/3.jpg" alt="Blog Post" />
                      <div className="blog-preview_posted">
                        <span className="blog-preview_date font-additional font-weight-bold text-uppercase">15 FEB</span>
                        <span className="blog-preview_comments font-additional font-weight-normal text-uppercase">15 COMMENTS</span>
                      </div>
                    </a>
                    <div className="blog-preview_info">
                      <h4 className="blog-preview_title font-additional font-weight-bold text-uppercase">AENEAN NISL VITAE IPSUM LOBORTIS</h4>
                      <div className="blog-preview_desc font-main font-weight-normal">Proin est elentesque risus magna vulputate vitae sodales uam morbi non sem lacus porta mollis nunc condime.</div>
                      <a className="blog-preview_btn button-border font-additional font-weight-normal before-bg text-uppercase hvr-rectangle-out hover-focus-bg" href="blog-post.html">MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12 clearfix">
                  <h3 className="title-primary font-additional font-weight-bold text-uppercase wow zoomIn" data-wow-delay="0.3s">CLIENTS SAYS</h3>
                  <div className="starSeparator wow zoomIn" data-wow-delay="0.3s">
                    <span className="icon-star" aria-hidden="true" />
                  </div>
                  <div className="mentions-slider vertical-slider wow fadeInUp" data-wow-delay="0.3s">
                    <ul className="bxslider" data-mode="vertical" data-slide-margin={51} data-min-slides={3} data-move-slides={1} data-pager="false" data-pager-custom="null" data-controls="true">
                      <li>
                        <div className="clients-comment clearfix">
                          <div className="clients-comment_ava">
                            <img src="assets/media/70x70/3.jpg" alt="Client" />
                          </div>
                          <div className="clients-comment_body font-main color-third">
                            <i className="fa fa-quote-left customColor" />
                            Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.
                          </div>
                          <div className="clients-comment_author font-additional font-weight-normal">
                            Smith John
                            <span>Happy Customer</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="clients-comment clearfix">
                          <div className="clients-comment_ava">
                            <img src="assets/media/70x70/4.jpg" alt="Client" />
                          </div>
                          <div className="clients-comment_body font-main color-third">
                            <i className="fa fa-quote-left customColor" />
                            Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.
                          </div>
                          <div className="clients-comment_author font-additional font-weight-normal">
                            Karla Anderson
                            <span>Happy Customer</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="clients-comment clearfix">
                          <div className="clients-comment_ava">
                            <img src="assets/media/70x70/5.jpg" alt="Client" />
                          </div>
                          <div className="clients-comment_body font-main color-third">
                            <i className="fa fa-quote-left customColor" />
                            Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.
                          </div>
                          <div className="clients-comment_author font-additional font-weight-normal">
                            Sheela Khan
                            <span>Happy Customer</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="clients-comment clearfix">
                          <div className="clients-comment_ava">
                            <img src="assets/media/70x70/3.jpg" alt="Client" />
                          </div>
                          <div className="clients-comment_body font-main color-third">
                            <i className="fa fa-quote-left customColor" />
                            Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.
                          </div>
                          <div className="clients-comment_author font-additional font-weight-normal">
                            Smith John
                            <span>Happy Customer</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="brands" className="paralax brands-box" style={{backgroundImage: 'url("assets/media/paralax/1.jpg")'}}>
            <div className="container">
              <h3 className="title-small font-additional font-weight-bold text-uppercase color-main wow zoomIn" data-wow-delay="0.3s">OUR BRANDS</h3>
              <div className="brands-container text-center">
                <div className="starSeparator wow zoomIn" data-wow-delay="0.3s">
                  <span aria-hidden="true" className="icon-star" />
                </div>
                <ul className="brands-list">
                  <li>
                    <a href="#" className="brand-item wow fadeInLeft" data-wow-delay="0.3s">
                      <img src="assets/media/brands/1.png" alt="Brand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="brand-item wow fadeInLeft" data-wow-delay="0.3s">
                      <img src="assets/media/brands/2.png" alt="Brand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="brand-item wow fadeInUp" data-wow-delay="0.3s">
                      <img src="assets/media/brands/3.png" alt="Brand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="brand-item wow fadeInUp" data-wow-delay="0.3s">
                      <img src="assets/media/brands/4.png" alt="Brand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="brand-item wow fadeInRight" data-wow-delay="0.3s">
                      <img src="assets/media/brands/5.png" alt="Brand" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="brand-item wow fadeInRight" data-wow-delay="0.3s">
                      <img src="assets/media/brands/6.png" alt="Brand" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section id="freeShpping">
            <div className="container freeshpping-container">
              <div className="row">
                <div className="freeshpping col-lg-4 col-md-4 col-sm-4 col-xs-12 clearfix">
                  <div className="freeshpping-item font-additional wow fadeInLeft" data-wow-delay="0.3s">
                    <span className="icon-globe-alt customColor" aria-hidden="true" />
                    FREE SHIPPING<br /> WORLDWIDE
                  </div>
                </div>
                <div className="freeshpping col-lg-4 col-md-4 col-sm-4 col-xs-12 clearfix">
                  <div className="freeshpping-item font-additional wow fadeInUp" data-wow-delay="0.3s">
                    <span className="icon-support customColor" aria-hidden="true" />
                    24/7 CUSTOMER<br /> SUPPORT
                  </div>
                </div>
                <div className="freeshpping col-lg-4 col-md-4 col-sm-4 col-xs-12 clearfix">
                  <div className="freeshpping-item font-additional wow fadeInRight" data-wow-delay="0.3s">
                    <span className="icon-handbag customColor" aria-hidden="true" />
                    RETURNS AND<br /> EXCHANGES
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="subscribe" className="subscribe-row">
            <div className="container">
              <div className="subscribe-container clearfix wow fadeInUp" data-wow-delay="0.3s">
                <div className="subscribe-desc font-additional font-weight-bold">SIGN UP FOR OUR MONTHLY NEWSLETTER</div>
                <div id="mc_embed_signup" className="subscribe-form">
                  <form action="http://templines.us9.list-manage.com/subscribe/post?u=fe9a9cfcf8d73763bcc53f206&id=319cafcc43" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                      <div className="mc-field-group subscribe-field">
                        <input type="email" defaultValue name="EMAIL" className="required email font-main color-third" id="mce-EMAIL" />
                      </div>
                      <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display: 'none'}} />
                        <div className="response" id="mce-success-response" style={{display: 'none'}} />
                      </div>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div style={{position: 'absolute', left: '-5000px'}}>
                        <input type="text" name="b_fe9a9cfcf8d73763bcc53f206_319cafcc43" tabIndex={-1} defaultValue />
                      </div>
                      <div className="subscribe-button">
                        <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary font-additional hvr-wobble-bottom"> SUBSCRIBE </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
