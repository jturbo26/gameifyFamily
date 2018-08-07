import { LOAD_REWARDS, CREATE_REWARD } from 'redux/actions';

const rewards = (state = [], action) => {
  switch (action.type) {
    case LOAD_REWARDS: {
      return action.rewards;
    }
    case CREATE_REWARD: {
      return [
        ...state,
        {
          _id: action._id,
          name: action.name,
          cost: action.cost,
          requiresApproval: action.requiresApproval
        }
      ];
    }
    default: {
      return state;
    }
  }
};

export default rewards;
