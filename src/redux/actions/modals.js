import { TOGGLE_MODAL } from 'redux/actions';

export const toggleModal = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_MODAL
    });
  };
};
