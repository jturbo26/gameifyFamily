import { ADD_APPROVAL_TO_QUEUE, REMOVE_APPROVAL_FROM_QUEUE } from './';

export const addActivity = (activity, requesterId, approvers) => ({
  type: ADD_APPROVAL_TO_QUEUE,
  activity,
  requesterId,
  approvers
});

export const removeApprovalFromQueue = approvalId => ({
  type: REMOVE_APPROVAL_FROM_QUEUE,
  approvalId
});
