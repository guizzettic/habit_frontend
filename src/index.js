import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { Provider } from 'react-reduct;
// import { createStore, applyMiddleWare } from 'redux';
// import reduxThunk from 'redux-thunk';

// import reducers from './reducers';
// const store = createStore(reducers .......)

// takes in two paramaters, 1: what we want to render, 2: where we want it to render
ReactDOM.render(
  // <Provider store=(store)>
    <App />,
  // </Provider>,
  document.getElementById('app')
 );