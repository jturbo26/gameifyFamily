import { ADD_ACTIVITY } from '../actions';

const approvalQueue = (state = {}, action) => {
  switch (action.type) {
    case ADD_ACTIVITY: {
      return [
        ...state,
        {
          approvalId: Math.floor(Math.random() * 1000 + 1),
          activityId: action.activity.id,
          requesterId: action.requesterId,
          approverId: action.approverId
        }
      ];
    }
    default: {
      return state;
    }
  }
};

export default approvalQueue;
