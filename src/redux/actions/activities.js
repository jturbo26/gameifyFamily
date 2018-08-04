const uuidv1 = require('uuid/v1');

import { LOAD_ACTIVITIES, CREATE_NEW_ACTIVITY, DELETE_ACTIVITY } from './';
import { displayToast } from 'redux/actions/toasts';

export const loadActivities = () => {
  return dispatch => {
    fetch('/getActivities')
      .then(data => data.json())
      .then(activities => dispatch({ type: LOAD_ACTIVITIES, activities }));
  };
};

export const createNewActivity = (name, description, points, frequency) => {
  const uuid = uuidv1();
  return dispatch => {
    dispatch({
      type: CREATE_NEW_ACTIVITY,
      id: uuid,
      name,
      description,
      points,
      frequency
    });
    dispatch(displayToast('', 'Activity Created Successfully', 'success'));
  };
};

export const deleteActivity = activityId => {
  return dispatch => {
    dispatch({
      type: DELETE_ACTIVITY,
      activityId
    });
  };
};
