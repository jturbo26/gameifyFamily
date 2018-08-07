import moment from 'moment';
import { LOAD_USERS, ADD_POINTS_TO_USER, CREATE_USER_RECORD, SET_POINTS_VALUE } from './';
import { TOGGLE_MODAL } from './index';

export const loadUsers = () => {
  return dispatch => {
    fetch('/getUsers')
      .then(data => data.json())
      .then(users => dispatch({ type: LOAD_USERS, users }));
  };
};

export const addPointsToUser = (user, points) => {
  return dispatch => {
    const headers = {
      'Content-Type': 'application/json'
    };
    const body = {
      user,
      points
    };
    fetch('/addPoints', { method: 'post', headers, body: JSON.stringify(body) });
    dispatch({
      type: ADD_POINTS_TO_USER,
      user,
      points
    });
  };
};

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
    const foundUser = getState().userData.find(u => u.name === user);
    console.log(foundUser);
    const headers = {
      'Content-Type': 'application/json'
    };
    const body = {
      user: foundUser,
      points: parseInt(newPointsValue)
    };
    fetch('/setPoints', { method: 'post', headers, body: JSON.stringify(body) })
      .then(res => {
        dispatch({
          type: SET_POINTS_VALUE,
          foundUser,
          newPointsValue: parseInt(newPointsValue)
        });
        dispatch({
          type: TOGGLE_MODAL
        });
      })
      .catch(err => console.log(err));
  };
};
