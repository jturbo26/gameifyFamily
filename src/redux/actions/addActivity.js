import { ADD_ACTIVITY } from './';

const addActivity = user => ({
  type: ADD_ACTIVITY_FOR_USER,
  activity,
  requesterId,
  approverId
});

export default addActivity;
