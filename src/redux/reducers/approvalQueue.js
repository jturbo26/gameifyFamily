import { ADD_ACTIVITY } from '../actions';

const approvalQueue = (state = {}, action) => {
  switch (action.type) {
    case ADD_ACTIVITY: {
      return [
        ...state,
        {
          // TODO: Make this a truly unique number
          approvalId: Math.floor(Math.random() * 1000 + 1),
          activityId: action.activity.id,
          requesterId: action.requesterId,
          approvers: action.approvers
        }
      ];
    }
    default: {
      return state;
    }
  }
};

export default approvalQueue;
