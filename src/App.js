
import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './store/configureStore';
import {Router } from 'react-router-dom';
import history from "./history";
import Routes from "./Routes";
class App extends Component {
    constructor(props){
        super(props);

    }
    render() {
  return (
    <div className="App">
            <Provider  store={store}>
                <Router basename="/" history={history}>
                        <Routes />
                </Router>
            </Provider>
    </div>
  );
}
}


export default App;
