import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducers from './reducers';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login';

const store = createStore(reducers);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route exact path="/pleasedontcomehere" component={Login} />
      <Route exact path="/" component={App} />
    </Provider>
  </Router>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
