import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import users from './users';
import activities from './activities';
import activeUser from './activeUser';
import approvalQueue from './approvalQueue';

const rootReducer = combineReducers({
  users,
  activities,
  activeUser,
  approvalQueue,
  router: routerReducer,
  form: formReducer
});

export default rootReducer;
