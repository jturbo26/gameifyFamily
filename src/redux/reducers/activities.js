import { CREATE_NEW_ACTIVITY } from 'redux/actions';

const activities = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ACTIVITY: {
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          pointsValue: action.pointsValue
        }
      ];
    }
    default: {
      return state;
    }
  }
};

export default activities;
