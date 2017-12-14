import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import rootReducer from './reducers/index';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
