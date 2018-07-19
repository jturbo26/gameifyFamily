import { ADD_APPROVAL_TO_QUEUE, REMOVE_APPROVAL_FROM_QUEUE } from '../actions';

const approvalQueue = (state = [], action) => {
  switch (action.type) {
    case ADD_APPROVAL_TO_QUEUE: {
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
    case REMOVE_APPROVAL_FROM_QUEUE: {
      const approvalToRemove = state.find(approval => approval.approvalId === action.approvalId);
      const indexOfApproval = state.indexOf(approvalToRemove);
      return [...state.slice(0, indexOfApproval), ...state.slice(indexOfApproval + 1)];
    }
    default: {
      return state;
    }
  }
};

export default approvalQueue;
