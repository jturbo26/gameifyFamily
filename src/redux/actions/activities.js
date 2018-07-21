const uuidv1 = require('uuid/v1');

import { CREATE_NEW_ACTIVITY } from './';

export const createNewActivity = async (dispatch, name, description, pointsValue) => {
  const uuid = await uuidv1();
  dispatch({
    type: CREATE_NEW_ACTIVITY,
    id: uuid,
    name,
    description,
    pointsValue
  });
  return true;
};
