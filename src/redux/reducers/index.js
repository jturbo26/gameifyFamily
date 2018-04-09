import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import users from './users';
import activeUser from './activeUser';

const rootReducer = combineReducers({
  users,
  activeUser,
  router: routerReducer,
  form: formReducer
});

export default rootReducer;
