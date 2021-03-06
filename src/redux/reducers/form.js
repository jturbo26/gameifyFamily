import { UPDATE_FIELD } from 'redux/actions/index';

const form = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value
      };
    default: {
      return state;
    }
  }
};

export default form;
