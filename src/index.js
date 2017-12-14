import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { history } from 'redux/store';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import store from 'redux/store';

import App from 'containers/App';
import Login from 'containers/Login';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
