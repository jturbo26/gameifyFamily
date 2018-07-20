import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import activities from './activities';
import activeUser from './activeUser';
import approvalQueue from './approvalQueue';

const rootReducer = combineReducers({
  users,
  activities,
  activeUser,
  approvalQueue,
  router: routerReducer
});

export default rootReducer;
