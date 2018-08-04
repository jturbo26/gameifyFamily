import { LOAD_REWARDS } from 'redux/actions';

const rewards = (state = [], action) => {
  switch (action.type) {
    case LOAD_REWARDS: {
      return action.rewards;
    }
    default: {
      return state;
    }
  }
};

export default rewards;
