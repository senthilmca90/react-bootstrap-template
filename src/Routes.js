import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import Home from "./components/Home/Home";

import Footer from "./common/Footer";
import Header from './common/Header';
import Aboutus from './components/Aboutus/Aboutus';
import  Contactus  from './components/Contactus/Contactus';
import  Product  from './components/Product/Product';


class Routes extends Component {
    constructor(props){
        super(props);
        console.log("router props ",  this.props);
    }

  render() {

    return (
        <React.Fragment>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} label="Home"/>
                <Route exact path="/about-us" component={Aboutus} label="Aboutus"/>
                <Route exact path="/product" component={Product} label="Product"/>
                <Route exact path="/contact-us" component={Contactus} label="Contactus"/>

            </Switch>
        <Footer />
        </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => ({
    authentication: state.authentication
})
export default connect(mapStateToProps, null)(Routes);