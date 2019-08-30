import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProductDetail extends Component {
    render() {
        return (
            <React.Fragment>
            <section id="pageTitleBox" className="paralax breadcrumb-container" style={{backgroundImage: 'url("assets/media/paralax/1.jpg")'}}>
            <div className="overlay" />
            <div className="container relative">
              <h1 className="title font-additional font-weight-normal color-main text-uppercase wow zoomIn" data-wow-delay="0.3s">Women shirt</h1>
              <ul className="breadcrumb-list wow zoomIn" data-wow-delay="0.3s">
                <li>
                  <a href="index-1.html" className="font-additional font-weight-normal color-main text-uppercase">HOME</a>
                  <span>/</span>
                </li>
                <li>
                  <a href="category.html" className="font-additional font-weight-normal color-main text-uppercase">SHOP</a>
                  <span>/</span>
                </li>
                <li className="font-additional font-weight-normal color-main text-uppercase">Shirt details</li>
              </ul>
            </div>
          </section>
          <section id="productDetails" className="product-details">
            <div className="container">
              <div className="row">
                <div className="product-gallery col-lg-4 col-md-4 col-sm-7 col-xs-12 clearfix">
                  <ul className="bxslider" data-mode="fade" data-slide-margin={0} data-min-slides={1} data-move-slides={1} data-pager="true" data-pager-custom="#bx-pager" data-controls="false">
                    <li><img src="assets/media/product-slider/1.jpg" /></li>
                    <li><img src="assets/media/product-slider/2.jpg" /></li>
                    <li><img src="assets/media/product-slider/3.jpg" /></li>
                  </ul>
                  <div id="bx-pager" className="product-gallery_preview">
                    <a data-slide-index={0} href="#"><img src="assets/media/product-slider/thumbs/1.jpg" /></a>
                    <a data-slide-index={1} href="#"><img src="assets/media/product-slider/thumbs/2.jpg" /></a>
                    <a data-slide-index={2} href="#"><img src="assets/media/product-slider/thumbs/3.jpg" /></a>
                  </div>
                </div>
                <div className="product-brand col-lg-3 col-md-3 col-sm-5 col-xs-12 clearfix">
                  <h3 className="sidebar-title font-additional font-weight-bold text-uppercase customColor wow fadeInUp" data-wow-delay="0.3s">product brand</h3>
                  <div className="product-sidebar-slider product-brand-container vertical-slider slide-controls-top wow fadeInUp" data-wow-delay="0.3s">
                    <ul className="bxslider" data-mode="vertical" data-slide-margin={26} data-min-slides={2} data-move-slides={1} data-pager="false" data-pager-custom="null" data-controls="true">
                      <li>
                        <a className="product-brand_item" href="#">
                          <img src="assets/media/product-brands/1.jpg" alt="Product Brand" />
                        </a>
                      </li>
                      <li>
                        <a className="product-brand_item" href="#">
                          <img src="assets/media/product-brands/2.jpg" alt="Product Brand" />
                        </a>
                      </li>
                      <li>
                        <a className="product-brand_item" href="#">
                          <img src="assets/media/product-brands/1.jpg" alt="Product Brand" />
                        </a>
                      </li>
                      <li>
                        <a className="product-brand_item" href="#">
                          <img src="assets/media/product-brands/2.jpg" alt="Product Brand" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="sidebar-title font-additional font-weight-bold text-uppercase customColor wow fadeInUp" data-wow-delay="0.3s">best sellers</h3>
                  <div className="product-sidebar-slider vertical-slider slide-controls-top wow fadeInUp" data-wow-delay="0.3s">
                    <ul className="bxslider" data-mode="vertical" data-slide-margin={26} data-min-slides={3} data-move-slides={1} data-pager="false" data-pager-custom="null" data-controls="true">
                      <li>
                        <a className="popular-product-item" href="product-details.html">
                          <img src="assets/media/80x75/5.jpg" alt="Product" />
                          <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">stylish caps</span>
                          <span className="popular-product-item_price font-additional customColor">$14.00</span>
                        </a>
                      </li>
                      <li>
                        <a className="popular-product-item" href="product-details.html">
                          <img src="assets/media/80x75/4.jpg" alt="Product" />
                          <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">bags &amp; packs</span>
                          <span className="popular-product-item_price font-additional customColor">$240.00</span>
                        </a>
                      </li>
                      <li>
                        <a className="popular-product-item" href="product-details.html">
                          <img src="assets/media/80x75/2.jpg" alt="Product" />
                          <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">MEN shirts</span>
                          <span className="popular-product-item_price font-additional customColor">$105.00</span>
                        </a>
                      </li>
                      <li>
                        <a className="popular-product-item" href="product-details.html">
                          <img src="assets/media/80x75/3.jpg" alt="Product" />
                          <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">women wear</span>
                          <span className="popular-product-item_price font-additional customColor">$350.00</span>
                        </a>
                      </li>
                      <li>
                        <a className="popular-product-item" href="product-details.html">
                          <img src="assets/media/80x75/1.jpg" alt="Product" />
                          <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">WOMEN ring</span>
                          <span className="popular-product-item_price font-additional customColor">$80.00</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-cart pull-left col-lg-5 col-md-5 col-sm-12 col-xs-12 clearfix">
                  <div className="product-options_header clearfix wow fadeInUp" data-wow-delay="0.3s">
                    <h3 className="font-additional font-weight-bold text-uppercase">Metallic-Flecked Tank</h3>
                    <div className="product-item_price font-additional font-weight-normal customColor">$240.00 <span>$265.00</span></div>
                    <ul className="rating">
                      <li><span aria-hidden="true" className="icon-star customColor" /></li>
                      <li><span aria-hidden="true" className="icon-star customColor" /></li>
                      <li><span aria-hidden="true" className="icon-star customColor" /></li>
                      <li><span aria-hidden="true" className="icon-star customColor" /></li>
                      <li><span aria-hidden="true" className="icon-star color-additional" /></li>
                    </ul>
                  </div>
                  <div className="product-options_body clearfix wow fadeInUp" data-wow-delay="0.3s">
                    <h4 className="font-additional font-weight-bold text-uppercase">PRODUCT DESCRIPTION</h4>
                    <div className="product-options_desc font-main color-third">Proin est elentesque risus magna vulputate vitae sodales uam morbi non sem lacus porta mollis. Nunc condime ntum metus eud In molestie.</div>
                  </div>
                  <div className="product-options_cart clearfix wow fadeInUp" data-wow-delay="0.3s">
                    <div className="select pull-left">
                      <select id="size" name="size" className="select-field font-additional">
                        <option value>Select Size</option>
                        <option value="trending">extra large</option>
                        <option value="sales">Large</option>
                        <option value="rating">medium</option>
                        <option value="price-asc">small</option>
                        <option value="price-desc">extra small</option>
                      </select>
                      <i className="fa fa-angle-down customColor" />
                    </div>
                    <div className="select pull-right">
                      <select id="color" name="color" className="select-field font-additional">
                        <option value>Select COLOR</option>
                        <option value="trending">White</option>
                        <option value="sales">green</option>
                        <option value="rating">black</option>
                        <option value="price-asc">red</option>
                        <option value="price-desc">blue</option>
                      </select>
                      <i className="fa fa-angle-down customColor" />
                    </div>
                    <div className="product-options_row">
                      <div className="product-counter">
                        <input className="font-main font-weight-normal" type="text" name="product-qty" id="productQuantity" defaultValue={1} readOnly="readonly" />
                        <div className="productCounter addQuantity font-main hover-focus-color" data-counter-step={1} data-counter-type="add" data-counter-field="#productQuantity">+</div>
                        <div className="productCounter minusQuantity font-main hover-focus-color" data-counter-step={1} data-counter-type="minus" data-counter-field="#productQuantity">-</div>
                      </div>
                      <a href="#" className="btn button-additional button-big font-additional font-weight-normal text-uppercase hvr-rectangle-out hover-focus-bg before-bg">
                        <span className="icon-basket" aria-hidden="true" />
                        add to cart
                      </a>
                    </div>
                    <div className="product-options_row">
                      <ul className="product-links">
                        <li>
                          <a href="#" className="font-additional font-weight-normal hover-focus-color">
                            <span aria-hidden="true" className="icon-heart" />
                            add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#" className="font-additional font-weight-normal hover-focus-color">
                            <span className="icon-envelope" aria-hidden="true" />
                            email to friend
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-options_footer clearfix wow fadeInUp" data-wow-delay="0.3s">
                    <div className="product-options_row">
                      <h4 className="font-additional font-weight-bold text-uppercase">categories</h4>
                      <ul className="tags-list">
                        <li><a href="category.html" className="font-main color-third hover-focus-color">ACCESSORIES</a>,</li>
                        <li><a href="category-2.html" className="font-main color-third hover-focus-color">MEN</a>,</li>
                        <li><a href="category.html" className="font-main color-third hover-focus-color">WOMEN</a>,</li>
                        <li><a href="category-2.html" className="font-main color-third hover-focus-color">clothes</a>,</li>
                        <li><a href="category.html" className="font-main color-third hover-focus-color">shirt</a>,</li>
                        <li><a href="category-2.html" className="font-main color-third hover-focus-color">branded</a></li>
                      </ul>
                      <h4 className="font-additional font-weight-bold text-uppercase">Share this product</h4>
                      <ul className="social-list">
                        <li><a href="#" className="hover-focus-border hover-focus-bg hvr-rectangle-out before-bg"><span className="social_facebook" aria-hidden="true" /></a></li>
                        <li><a href="#" className="hover-focus-border hover-focus-bg hvr-rectangle-out before-bg"><span className="social_twitter" aria-hidden="true" /></a></li>
                        <li><a href="#" className="hover-focus-border hover-focus-bg hvr-rectangle-out before-bg"><span className="social_googleplus" aria-hidden="true" /></a></li>
                        <li><a href="#" className="hover-focus-border hover-focus-bg hvr-rectangle-out before-bg"><span className="social_pinterest" aria-hidden="true" /></a></li>
                        <li><a href="#" className="hover-focus-border hover-focus-bg hvr-rectangle-out before-bg"><span className="social_instagram" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="tabsPanel" className="tabs-container background-container">
            <div className="container">
              <div className="tabs-panel" role="tabpanel">
                <ul className="nav-tabs wow fadeInUp" data-wow-delay="0.3s" role="tablist">
                  <li role="presentation" className="active">
                    <a className="hover-focus-border hover-focus-bg font-additional font-weight-normal hvr-rectangle-out before-bg" href="#description" aria-controls="home" role="tab" data-toggle="tab">description</a>
                  </li>
                  <li role="presentation">
                    <a className="hover-focus-border hover-focus-bg font-additional font-weight-normal hvr-rectangle-out before-bg" href="#reviews" aria-controls="profile" role="tab" data-toggle="tab">REVIEWS (2)</a>
                  </li>
                  <li role="presentation">
                    <a className="hover-focus-border hover-focus-bg font-additional font-weight-normal hvr-rectangle-out before-bg" href="#delivery-returns" aria-controls="messages" role="tab" data-toggle="tab">Delivery &amp; returns</a>
                  </li>
                </ul>
                <div className="tab-content wow fadeInUp" data-wow-delay="0.3s">
                  <div id="description" className="tab-pane fade in active" role="tabpanel">
                    <p>Proin est elentesque risus magna vulputate vitae sodales uam morbi non sem lacus porta mollis. Nunc condime ntum metus eud In molestie sed consect etu Lorem ipsum dolor sit amet conse adipisicing elit sed do incididunt ut labore et dolore magna. Ut enim ad minim veniam quis nostrud exercita tion ullamco laboris nisi aliquip exa commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Accusantium doloremque laudantium totam rem aperiam eaque ipsa:</p>
                    <ul className="bullet-list">
                      <li>Excepteur sint occaecat cupidatat non</li>
                      <li>Proident sunt in culpa qui deserunt</li>
                      <li>Mollit anim id est laborum</li>
                      <li>Sed ut perspiciatis unde omnis iste natus</li>
                      <li>Quae ab illo inventore veritatis quas</li>
                    </ul>
                  </div>
                  <div id="reviews" className="tab-pane fade" role="tabpanel">
                    <p>Proin est elentesque risus magna vulputate vitae sodales uam morbi non sem lacus porta mollis. Nunc condime ntum metus eud In molestie sed consect etu Lorem ipsum dolor sit amet conse adipisicing elit sed do incididunt ut labore et dolore magna. Ut enim ad minim veniam quis nostrud exercita tion ullamco laboris nisi aliquip exa commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <ul className="bullet-list">
                      <li>Excepteur sint occaecat cupidatat non</li>
                      <li>Proident sunt in culpa qui deserunt</li>
                      <li>Mollit anim id est laborum</li>
                      <li>Sed ut perspiciatis unde omnis iste natus</li>
                      <li>Quae ab illo inventore veritatis quas</li>
                    </ul>
                    <p>Accusantium doloremque laudantium totam rem aperiam eaque ipsa:</p>
                  </div>
                  <div id="delivery-returns" className="tab-pane fade" role="tabpanel">
                    <p>Accusantium doloremque laudantium totam rem aperiam eaque ipsa:</p>
                    <p>Proin est elentesque risus magna vulputate vitae sodales uam morbi non sem lacus porta mollis. Nunc condime ntum metus eud In molestie sed consect etu Lorem ipsum dolor sit amet conse adipisicing elit sed do incididunt ut labore et dolore magna. Ut enim ad minim veniam quis nostrud exercita tion ullamco laboris nisi aliquip exa commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <ul className="bullet-list">
                      <li>Excepteur sint occaecat cupidatat non</li>
                      <li>Proident sunt in culpa qui deserunt</li>
                      <li>Mollit anim id est laborum</li>
                      <li>Sed ut perspiciatis unde omnis iste natus</li>
                      <li>Quae ab illo inventore veritatis quas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="slider" className="slider-products">
            <div className="container">
              <div className="starSeparatorBox clearfix">
                <div className="starSeparator wow zoomIn" data-wow-delay="0.3s">
                  <span aria-hidden="true" className="icon-star" />
                </div>
                <h2 className="title font-additional font-weight-bold text-uppercase wow zoomIn" data-wow-delay="0.3s">THE SUGGESTIONS</h2>
                <div id="owl-product-slider" className="enable-owl-carousel owl-product-slider owl-top-pagination owl-carousel owl-theme wow fadeInUp" data-wow-delay="0.7s" data-navigation="true" data-pagination="false" data-single-item="false" data-auto-play="false" data-transition-style="false" data-main-text-animation="false" data-min600={2} data-min800={3} data-min1200={4}>
                  <div className="item">
                    <div className="product-item hvr-underline-from-center">
                      <div className="product-item_body product-border">
                        <img alt="Product" src="assets/media/270x320/1.jpg" className="product-item_image" />
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
                </div>
              </div>
            </div>
          </section>
          <section id="brandsSlider" className="brands-slider">
            <div className="container">
              <h2 className="title font-additional font-weight-bold text-uppercase wow zoomIn" data-wow-delay="0.3s">OUR brandS</h2>
              <div className="starSeparatorBox clearfix">
                <div className="starSeparator wow zoomIn" data-wow-delay="0.3s">
                  <span aria-hidden="true" className="icon-star" />
                </div>
                <div id="owl-product-slider" className="enable-owl-carousel owl-product-slider owl-bottom-pagination owl-carousel owl-theme wow fadeInUp" data-wow-delay="0.7s" data-navigation="true" data-pagination="false" data-single-item="false" data-auto-play="false" data-transition-style="false" data-main-text-animation="false" data-min600={2} data-min800={3} data-min1200={6}>
                  <div className="item">
                    <a href="#"><img className="brands-slider_logo" src="assets/media/brands/7.jpg" alt="Brand" /></a>
                  </div>
                  <div className="item">
                    <a href="#"><img className="brands-slider_logo" src="assets/media/brands/8.jpg" alt="Brand" /></a>
                  </div>
                  <div className="item">
                    <a href="#"><img className="brands-slider_logo" src="assets/media/brands/9.jpg" alt="Brand" /></a>
                  </div>
                  <div className="item">
                    <a href="#"><img className="brands-slider_logo" src="assets/media/brands/10.jpg" alt="Brand" /></a>
                  </div>
                  <div className="item">
                    <a href="#"><img className="brands-slider_logo" src="assets/media/brands/11.jpg" alt="Brand" /></a>
                  </div>
                  <div className="item">
                    <a href="#"><img className="brands-slider_logo" src="assets/media/brands/12.jpg" alt="Brand" /></a>
                  </div>
                  <div className="item">
                    <a href="#"><img className="brands-slider_logo" src="assets/media/brands/9.jpg" alt="Brand" /></a>
                  </div>
                  <div className="item">
                    <a href="#"><img className="brands-slider_logo" src="assets/media/brands/10.jpg" alt="Brand" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="subscribe" className="subscribe-row customBgColor subscribe-custom-bg">
            <div className="container">
              <div className="subscribe-container clearfix wow fadeInUp" data-wow-delay="0.3s">
                <div className="subscribe-desc font-additional font-weight-bold color-main">SIGN UP FOR OUR MONTHLY NEWSLETTER</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
