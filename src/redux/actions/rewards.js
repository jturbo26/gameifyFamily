const uuidv1 = require('uuid/v1');

import { LOAD_REWARDS, CREATE_REWARD } from './';
import { displayToast } from 'redux/actions/toasts';

export const loadRewards = () => {
  return dispatch => {
    fetch('/getRewards')
      .then(data => data.json())
      .then(rewards => dispatch({ type: LOAD_REWARDS, rewards }));
  };
};

export const createNewReward = (name, cost, requiresApproval) => {
  const uuid = uuidv1();
  return dispatch => {
    dispatch({
      type: CREATE_REWARD,
      _id: uuid,
      name,
      cost: parseInt(cost),
      requiresApproval: requiresApproval === 'Y' ? true : false
    });
    dispatch(displayToast('', 'Reward Created Successfully', 'success'));
  };
};
