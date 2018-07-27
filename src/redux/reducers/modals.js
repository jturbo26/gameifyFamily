import { TOGGLE_MODAL } from 'redux/actions/index';

const isModalOpen = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default: {
      return state;
    }
  }
};

export default isModalOpen;
