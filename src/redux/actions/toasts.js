import { DISPLAY_TOAST, HIDE_TOAST } from 'redux/actions';

export const hideToast = () => ({
  type: HIDE_TOAST
});

const displayToaster = (title, body) => ({
  type: DISPLAY_TOAST,
  title,
  body
});

export const displayToast = (title, body, timeout) => {
  return dispatch => {
    const howLong = timeout === undefined ? 5000 : timeout;
    dispatch(displayToaster(title, body));
    setTimeout(() => dispatch(hideToast()), howLong);
  };
};
