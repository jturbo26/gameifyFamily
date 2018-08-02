const uuidv1 = require('uuid/v1');

import { LOAD_ACTIVITIES, CREATE_NEW_ACTIVITY, DELETE_ACTIVITY } from './';

export const logActivities = activities => {
  return dispatch => {
    fetch('/getActivities').then(activities => {
      dispatch({
        type: LOAD_ACTIVITIES,
        activities
      });
    });
  };
};

export const createNewActivity = async (dispatch, name, description, points, frequency) => {
  const uuid = await uuidv1();
  dispatch({
    type: CREATE_NEW_ACTIVITY,
    id: uuid,
    name,
    description,
    points,
    frequency
  });
  return true;
};

export const deleteActivity = activityId => {
  return dispatch => {
    dispatch({
      type: DELETE_ACTIVITY,
      activityId
    });
  };
};
