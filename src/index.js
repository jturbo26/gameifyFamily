import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { history } from 'redux/store';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import store from 'redux/store';

import App from 'containers/App';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('containers/App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('app')
    );
  });
}
