import { DISPLAY_TOAST, HIDE_TOAST } from 'redux/actions';

export const hideToast = () => ({
  type: HIDE_TOAST
});

const displayToaster = (title, body, toastType) => ({
  type: DISPLAY_TOAST,
  title,
  body,
  toastType
});

export const displayToast = (title, body, toastType, timeout) => {
  return dispatch => {
    const howLong = timeout === undefined ? 5000 : timeout;
    dispatch(displayToaster(title, body, toastType));
    setTimeout(() => dispatch(hideToast()), howLong);
  };
};
