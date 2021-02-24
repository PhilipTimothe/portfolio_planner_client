import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, compose, applyMiddleware} from 'redux'
import { Provider } from "react-redux";
import logger from "redux-logger"
import thunk from 'redux-thunk'
import {reducer} from './redux/reducer'
require('dotenv').config();

// Must remove compose and window elements in order for GitHub Pages to work properly.  
// This will be a reminder for future projects.
// 
// const store = createStore(
//   reducer, 
//   compose(
//     applyMiddleware(thunk, logger),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   )

const store = createStore(
  reducer, applyMiddleware(thunk, logger)
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
