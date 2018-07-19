import { ADD_APPROVAL_TO_QUEUE } from './';

export const addActivity = (activity, requesterId, approvers) => ({
  type: ADD_APPROVAL_TO_QUEUE,
  activity,
  requesterId,
  approvers
});
