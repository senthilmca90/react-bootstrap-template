import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from '../reducers';
// import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [
    thunk,
    logger
  ]
  const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export default createStore(rootReducer, withDevTools(
    applyMiddleware(...middleware)
  ))