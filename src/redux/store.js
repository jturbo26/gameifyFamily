import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/index';
import createHistory from 'history/createBrowserHistory';


import { initialState } from 'mockData.js';

export const history = createHistory();

const middleware = routerMiddleware(history);
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
