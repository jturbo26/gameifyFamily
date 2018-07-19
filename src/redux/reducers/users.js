import { ADD_POINTS_TO_USER } from 'redux/actions';

const users = (state = [], action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export default users;
