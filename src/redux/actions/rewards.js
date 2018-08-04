import { LOAD_REWARDS } from './';

export const loadRewards = () => {
  return dispatch => {
    fetch('/getRewards')
      .then(data => data.json())
      .then(rewards => dispatch({ type: LOAD_REWARDS, rewards }));
  };
};
