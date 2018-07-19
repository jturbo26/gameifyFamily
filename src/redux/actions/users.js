import { ADD_POINTS_TO_USER } from './';

export const addPointsToUser = (user, points) => ({
  type: ADD_POINTS_TO_USER,
  user,
  points
});
