import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import rootReducer from './reducers/index';
import createHistory from 'history/createBrowserHistory';
import { reducer as formReducer } from 'redux-form';

export const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer,
    form: formReducer
  }),
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
