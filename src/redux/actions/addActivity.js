import { ADD_ACTIVITY } from './';

const addActivity = (activity, requesterId, approvers) => ({
  type: ADD_ACTIVITY,
  activity,
  requesterId,
  approvers
});

export default addActivity;
