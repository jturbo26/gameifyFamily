import moment from 'moment';
import { ADD_POINTS_TO_USER, CREATE_USER_RECORD } from './';

export const addPointsToUser = (user, points) => ({
  type: ADD_POINTS_TO_USER,
  user,
  points
});

export const createUserRecord = (user, activityId, activityName) => {
  return dispatch => {
    const now = moment();
    dispatch({
      type: CREATE_USER_RECORD,
      user,
      activityId,
      activityName,
      timestamp: now
    });
  };
};
