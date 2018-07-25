import { ADD_APPROVAL_TO_QUEUE, REMOVE_APPROVAL_FROM_QUEUE } from './';
import { displayToast } from 'redux/actions/toasts';

const addApprovalAction = (activity, requesterId, approvers) => {
  return {
    type: ADD_APPROVAL_TO_QUEUE,
    activity,
    requesterId,
    approvers
  };
};

export const addApprovalToQueue = (activity, requesterId, approvers) => {
  return dispatch => {
    dispatch(addApprovalAction(activity, requesterId, approvers));
    dispatch(displayToast('', 'Approval requested from adult'));
  };
};

export const removeApprovalFromQueue = approvalId => ({
  type: REMOVE_APPROVAL_FROM_QUEUE,
  approvalId
});
