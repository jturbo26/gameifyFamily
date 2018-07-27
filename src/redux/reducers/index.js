import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import activeUser from './activeUser';
import activities from './activities';
import approvalQueue from './approvalQueue';
import form from './form';
import users from './users';
import isModalOpen from './modals';
import rewards from './rewards';
import toasts from './toasts';

const rootReducer = combineReducers({
  activeUser,
  activities,
  approvalQueue,
  form,
  users,
  isModalOpen,
  rewards,
  toasts,
  router: routerReducer
});

export default rootReducer;
