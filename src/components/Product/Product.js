import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};



export class Product extends Component {
    render() {
        const wrapperStyle = { width: 254, margin: 5 };
        return (
            <React.Fragment>
            <section id="pageTitleBox" className="paralax breadcrumb-container" style={{backgroundImage: 'url("assets/media/paralax/3.jpg")'}}>
            <div className="overlay" />
            <div className="container relative">
              <h1 className="title font-additional font-weight-normal color-main text-uppercase wow zoomIn" data-wow-delay="0.3s">Product category 1</h1>
              <ul className="breadcrumb-list wow zoomIn" data-wow-delay="0.3s">
                <li>
                  <a href="index-1.html" className="font-additional font-weight-normal color-main text-uppercase">HOME</a>
                  <span>/</span>
                </li>
                <li className="font-additional font-weight-normal color-main text-uppercase">WOMEN</li>
              </ul>
            </div>
          </section>
          <section id="pageContent" className="page-content">
            <div className="container">
              <div className="row">
                <div className="sidebar col-lg-3 col-md-3 col-sm-3 col-xs-12 clearfix">
                  <h3 className="sidebar-title font-additional font-weight-bold text-uppercase customColor wow fadeInUp" data-wow-delay="0.3s">categories</h3>
                  <ul className="categories-tree wow fadeInUp" data-wow-delay="0.3s">
                    <li>
                      <a href="#" className="font-additional font-weight-normal hover-focus-color color-third text-uppercase">
                        <span className="pull-left">ACCESSORIES</span>
                        <span className="pull-right">(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-additional font-weight-normal hover-focus-color color-third text-uppercase">
                        <span className="pull-left">FOOTWEAR</span>
                        <span className="pull-right">(19)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-additional font-weight-normal hover-focus-color color-third text-uppercase">
                        <span className="pull-left">JEWELLRY</span>
                        <span className="pull-right">(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-additional font-weight-normal hover-focus-color color-third text-uppercase">
                        <span className="pull-left">MEN</span>
                        <span className="pull-right">(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-additional font-weight-normal hover-focus-color color-third text-uppercase">
                        <span className="pull-left">NEW</span>
                        <span className="pull-right">(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-additional font-weight-normal hover-focus-color color-third text-uppercase">
                        <span className="pull-left">WOMEN</span>
                        <span className="pull-right">(7)</span>
                      </a>
                    </li>
                  </ul>
                  <h3 className="sidebar-title font-additional font-weight-bold text-uppercase customColor wow fadeInUp" data-wow-delay="0.3s">by price</h3>

                  <div style={wrapperStyle}>
                <p>Range with custom tooltip</p>
                <Range className="sidebar-slider wow fadeInUp" min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                </div>


                  <ul className="category-images sidebar-product wow fadeInUp" data-wow-delay="0.3s">
                    <li className="grid">
                      <figure className="effect-bubba">
                        <img src="assets/media/250x300/1.jpg" alt="Category" />
                        <figcaption>
                          <div className="category-images_content">
                            <h2 className="font-third font-weight-light text-uppercase color-main">FOR WOMEN</h2>
                            <p className="font-additional font-weight-bold text-uppercase color-main line-text line-text_white">FOOT WEAR</p>
                          </div>
                          <a href="#">View more</a>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                  <h3 className="sidebar-title font-additional font-weight-bold text-uppercase customColor wow fadeInUp" data-wow-delay="0.3s">featured products</h3>
                  <ul className="sidebar-popular-product wow fadeInUp" data-wow-delay="0.3s">
                    <li>
                      <a className="popular-product-item" href="product-details.html">
                        <img src="assets/media/80x75/1.jpg" alt="Product" />
                        <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">WOMEN ring</span>
                        <span className="popular-product-item_price font-additional color-third">$80.00</span>
                      </a>
                    </li>
                    <li>
                      <a className="popular-product-item" href="product-details.html">
                        <img src="assets/media/80x75/2.jpg" alt="Product" />
                        <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">MEN shirts</span>
                        <span className="popular-product-item_price font-additional color-third">$105.00</span>
                      </a>
                    </li>
                    <li>
                      <a className="popular-product-item" href="product-details.html">
                        <img src="assets/media/80x75/3.jpg" alt="Product" />
                        <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">women wear</span>
                        <span className="popular-product-item_price font-additional color-third">$350.00</span>
                        <span className="product-item_sale color-main font-additional customBgColor circle">-5%</span>
                      </a>
                    </li>
                    <li>
                      <a className="popular-product-item" href="product-details.html">
                        <img src="assets/media/80x75/4.jpg" alt="Product" />
                        <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">bags &amp; packs</span>
                        <span className="popular-product-item_price font-additional color-third">$240.00</span>
                      </a>
                    </li>
                    <li>
                      <a className="popular-product-item" href="product-details.html">
                        <img src="assets/media/80x75/5.jpg" alt="Product" />
                        <span className="popular-product-item_title font-additional font-weight-bold text-uppercase">stylish caps</span>
                        <span className="popular-product-item_price font-additional color-third">$14.00</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 clearfix">
                  <div className="content-box">
                    <div className="category-filter clearfix wow fadeInUp" data-wow-delay="0.3s">
                      <div className="select pull-left">
                        <select className="select-field font-main color-third" name="sort" id="sort">
                          <option value>Default Sorting</option>
                          <option value="trending">Trending items</option>
                          <option value="sales">Best sellers</option>
                          <option value="rating">Best rated</option>
                          <option value="price-asc">Price: low to high</option>
                          <option value="price-desc">Price: high to low</option>
                        </select>
                        <i className="fa fa-angle-down customColor" />
                      </div>
                      <div className="select pull-left">
                        <select className="select-field font-main color-third" name="items-qty" id="items-qty">
                          <option value={12}>Items On Page 12</option>
                          <option value={24}>Items On Page 24</option>
                          <option value={36}>Items On Page 36</option>
                          <option value={48}>Items On Page 48</option>
                        </select>
                        <i className="fa fa-angle-down customColor" />
                      </div>
                      <a href="category-2.html" className="pull-right grid-type hover-focus-border">
                        <span className="icon-list" aria-hidden="true" />
                      </a>
                      <a href="category.html" className="pull-right grid-type active customBgColor color-main">
                        <span className="icon-grid" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="products-cat clearfix">
                      <ul className="products-grid">
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
                          <div className="product-item hvr-underline-from-center">
                            <div className="product-item_body">
                              <img className="product-item_image" src="assets/media/270x360/2.jpg" alt="Product" />
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
                              <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">WOMEN GOWN</div>
                              <div className="product-item_price font-additional font-weight-normal customColor">$240.00 <span>$265.00</span></div>
                            </a>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
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
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
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
                              <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">SPRING CLOTH</div>
                              <div className="product-item_price font-additional font-weight-normal customColor">$300.00</div>
                            </a>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
                          <div className="product-item hvr-underline-from-center">
                            <div className="product-item_body product-border">
                              <img alt="Product" src="assets/media/270x320/1.jpg" className="product-item_image" />
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
                              <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">WOMEN CAP</div>
                              <div className="product-item_price font-additional font-weight-normal customColor">$240.00 <span>$265.00</span></div>
                            </a>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
                          <div className="product-item hvr-underline-from-center">
                            <div className="product-item_body product-border">
                              <img alt="Product" src="assets/media/270x320/3.jpg" className="product-item_image" />
                              <a href="product-details.html" className="product-item_link" />
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
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
                          <div className="product-item hvr-underline-from-center">
                            <div className="product-item_body product-border">
                              <img alt="Product" src="assets/media/270x320/4.jpg" className="product-item_image" />
                              <a href="product-details.html" className="product-item_link" />
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
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
                          <div className="product-item hvr-underline-from-center">
                            <div className="product-item_body">
                              <img className="product-item_image" src="assets/media/270x360/9.jpg" alt="Product" />
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
                              <div className="product-item_title font-additional font-weight-bold text-center text-uppercase">WOMEN JACKET</div>
                              <div className="product-item_price font-additional font-weight-normal customColor">$240.00 <span>$265.00</span></div>
                            </a>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
                          <div className="product-item hvr-underline-from-center">
                            <div className="product-item_body">
                              <img className="product-item_image" src="assets/media/270x360/1.jpg" alt="Product" />
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
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="0.3s">
                          <div className="product-item hvr-underline-from-center">
                            <div className="product-item_body">
                              <img className="product-item_image" src="assets/media/270x360/10.jpg" alt="Product" />
                              <a className="product-item_link" href="product-details.html">
                                <span className="product-item_sale color-main font-additional customBgColor circle">-20%</span>
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
                        </li>
                        <li className="helper-justify" />
                      </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product)
