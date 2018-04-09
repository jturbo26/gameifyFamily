import { UPDATE_ACTIVE_USER } from 'redux/actions/index';

const activeUser = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_USER:
      return action.user
    default: {
      return state;
    }
  }
};

export default activeUser;
