import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import './Header.css'
class Header extends Component {

    constructor(props){
        super(props)

    }


  render() {


    return (
        <header id="header">
        <div className="header-top">
          <div className="container">
            <ul className="pull-left contact-list">
              <li>
                <span className="sli icon-envelope-open" aria-hidden="true" />
                <span className="contact-list_label font-main font-weight-normal">Email:</span>
                <a href="#" className="contact-list_value font-main font-weight-normal">info@templines.com</a>
              </li>
              <li>
                <span className="sli icon-call-out" aria-hidden="true" />
                <span className="contact-list_label font-main font-weight-normal">Help Line:</span>
                <span className="contact-list_value font-main font-weight-normal">0800 567 345</span>
              </li>
            </ul>
            <ul className="nav nav-pills nav-top navbar-right">
              <li className="dropdown langs">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">LANG [EN] <i className="fa fa-angle-down" /></a>
                <ul role="menu" className="dropdown-menu">
                  <li><a href="#">[DE]</a></li>
                  <li><a href="#">[ES]</a></li>
                  <li><a href="#">[FR]</a></li>
                </ul>
              </li>
              <li className="dropdown currency">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">usd <i className="fa fa-angle-down" /></a>
                <ul role="menu" className="dropdown-menu">
                  <li><a href="#">eur</a></li>
                </ul>
              </li>
              <li className="dropdown my-account">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">My Account <i className="fa fa-angle-down" /></a>
                <ul role="menu" className="dropdown-menu">
                  <li><a href="#">My Dashboard</a></li>
                  <li><a href="#">Account Information</a></li>
                  <li><a href="#">Address Book</a></li>
                  <li><a href="#">My Orders</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-middle">
          <div className="container relative">
            <a href="index.html" className="logo pull-left" />
            <div className="header-search">
              <div className="header-search_filter">
                <select className="formDropdown font-additional font-weight-normal" name="filterby" id="filterby">
                  <option value={0}>Filter By</option>
                  <option value="date">Date</option>
                  <option value="title">Title</option>
                  <option value="cat">Category</option>
                </select>
                <i className="fa fa-angle-down customColor" />
              </div>
              <div className="header-search_form">
                <form className="product-search form-inline" action="#" method="POST">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="searchQuery">Product Name ...</label>
                    <input type="search" className="product-search_field font-main font-weight-normal" id="searchQuery" placeholder="Product Name ..." />
                  </div>
                  <button type="submit" className="product-search_btn hvr-border-fade">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
            </div>
            <div className="header-cart pull-right">
              <div className="header-cart_preview">
                <span className="sli icon-bag customBgColor" aria-hidden="true" />
                <span className="header-cart_qty font-additional font-weight-bold text-uppercase">2 ITEM(S)</span>
                <span className="header-cart_amount font-additional font-weight-normal">97.25 USD</span>
                <span className="eli arrow_right customColor" aria-hidden="true" />
              </div>
              <div className="header-cart_product clearfix">
                <h3 className="font-additional font-weight-bold">Recently added item(s)</h3>
                <ul className="header-cart_product_list">
                  <li>
                    <div className="header-cart_product_list_item clearfix">
                      <a className="item-preview" href="product-details.html"><img src="media/70x70/1.jpg" alt="Product" /></a>
                      <h4><a className="font-additional font-weight-normal hover-focus-color" href="product-details.html">Stylish Wear</a></h4>
                      <span className="item-cat font-main font-weight-normal"><a className="hover-focus-color" href="#">Men</a></span>
                      <span className="item-price font-additional font-weight-normal customColor">37.15 USD</span>
                      <a className="item-del hover-focus-color" href="#"><i className="fa fa-trash-o" /></a>
                    </div>
                  </li>
                  <li>
                    <div className="header-cart_product_list_item clearfix">
                      <a className="item-preview" href="product-details.html"><img src="media/70x70/2.jpg" alt="Product" /></a>
                      <h4><a className="font-additional font-weight-normal hover-focus-color" href="product-details.html">Bag</a></h4>
                      <span className="item-cat font-main font-weight-normal"><a className="hover-focus-color" href="#">Accessories</a></span>
                      <span className="item-price font-additional font-weight-normal customColor">60.10 USD</span>
                      <a className="item-del hover-focus-color" href="#"><i className="fa fa-trash-o" /></a>
                    </div>
                  </li>
                </ul>
                <div className="cart-total text-right font-additional font-weight-normal">Subtotal <span className="customColor">$97.25</span></div>
                <div className="cart-buttons text-right">
                  <button className="btn btn-white font-additional font-weight-bold hvr-shutter-out-horizontal before-bg">View Cart</button>
                  <button className="btn btn-white font-additional font-weight-bold hvr-shutter-out-horizontal before-bg">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav naaBr navbar-main-slide">
          <div className="container">
            <i className="fa fa-bars mobileMenuNav mobileMenuSwitcher onlyMobile" />

                <nav className="menu-container">
              <i className="fa fa-times close-menu mobileMenuSwitcher onlyMobile" />
              <ul className="nav navbar-nav navbar-main">
                <li className="dropdown active">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="index-1.html">Home <i className="fa fa-angle-down customColor" /></a>
                  <ul className="dropdown-menu">
                    <li className="active"><a href="index-1.html">Home Version 1</a></li>
                    <li><a href="index-2.html">Home Version 2</a></li>
                    <li><a href="index-3.html">Home Version 3</a></li>
                    <li><a href="index-4.html">Home Version 4</a></li>
                    <li><a href="index-5.html">Home Version 5</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link data-toggle="dropdown" className="dropdown-toggle" to="product">Shop <i className="fa fa-angle-down customColor" /></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="product">Category Version 1</Link></li>
                    <li><a href="category-2.html">Category Version 2</a></li>
                  </ul>
                </li>
                <li><a href="product-details.html">MEN </a></li>
                <li><a href="product-details-2.html">WOMEN</a></li>
                <li><a href="doc.html">DOCUMENTATION</a></li>
                <li><a href="product-details-2.html">SHOES</a></li>
                <li className="dropdown">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="blog.html">BLOG <i className="fa fa-angle-down customColor" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="blog.html">Blog Version 1</a></li>
                    <li><a href="blog-2.html">Blog Version 2</a></li>
                  </ul>
                </li>
                <li><a href="blog-post.html">Post</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    )
  }
}

export default Header;
