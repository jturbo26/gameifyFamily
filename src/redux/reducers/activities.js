import { LOAD_ACTIVITIES, CREATE_NEW_ACTIVITY, DELETE_ACTIVITY } from 'redux/actions';

const activities = (state = [], action) => {
  switch (action.type) {
    case LOAD_ACTIVITIES: {
      return action.activities;
    }
    case CREATE_NEW_ACTIVITY: {
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          points: action.points,
          frequency: action.frequency
        }
      ];
    }
    case DELETE_ACTIVITY: {
      const indexOfActivityToDelete = state.indexOf(
        state.find(activity => activity.id === action.activityId)
      );
      return [
        ...state.slice(0, indexOfActivityToDelete),
        ...state.slice(indexOfActivityToDelete + 1)
      ];
    }
    default: {
      return state;
    }
  }
};

export default activities;
