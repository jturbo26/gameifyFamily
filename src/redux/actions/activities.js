const uuidv1 = require('uuid/v1');

import { CREATE_NEW_ACTIVITY, DELETE_ACTIVITY } from './';

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
