import {
  ADD_POINTS_TO_USER,
  CREATE_USER_RECORD,
  SET_POINTS_VALUE,
  LOAD_USERS
} from 'redux/actions';

const userData = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS: {
      return action.users;
    }
    case ADD_POINTS_TO_USER: {
      const userFromState = state.find(user => user.id === action.user.id);
      const indexOfUser = state.indexOf(userFromState);
      return [
        ...state.slice(0, indexOfUser),
        {
          ...userFromState,
          pointsValue: userFromState.pointsValue + action.points
        },
        ...state.slice(indexOfUser + 1)
      ];
    }
    case CREATE_USER_RECORD: {
      const userFromState = state.find(user => user.id === action.user.id);
      const indexOfUser = state.indexOf(userFromState);
      return [
        ...state.slice(0, indexOfUser),
        {
          ...userFromState,
          userRecords: [
            ...userFromState.userRecords,
            {
              activityId: action.activityId,
              activityName: action.activityName,
              timestamp: action.timestamp
            }
          ]
        },
        ...state.slice(indexOfUser + 1)
      ];
    }
    case SET_POINTS_VALUE: {
      const userFromState = state.find(user => user.id === action.foundUser.id);
      const indexOfUser = state.indexOf(userFromState);
      return [
        ...state.slice(0, indexOfUser),
        {
          ...userFromState,
          pointsValue: action.newPointsValue
        },
        ...state.slice(indexOfUser + 1)
      ];
    }
    default: {
      return state;
    }
  }
};

export default userData;
