import moment from 'moment';
import { ADD_POINTS_TO_USER, CREATE_USER_RECORD, SET_POINTS_VALUE, LOAD_USERS } from './';
import { TOGGLE_MODAL } from './index';

export const loadUsers = () => {
  return dispatch => {
    fetch('/getUsers')
      .then(data => data.json())
      .then(users => dispatch({ type: LOAD_USERS, users }));
  };
};

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

export const setPointsValue = (user, newPointsValue) => {
  return async (dispatch, getState) => {
    const foundUser = getState().users.find(u => u.id === user);
    await dispatch({
      type: SET_POINTS_VALUE,
      foundUser,
      newPointsValue: parseInt(newPointsValue)
    });
    dispatch({
      type: TOGGLE_MODAL
    });
  };
};
