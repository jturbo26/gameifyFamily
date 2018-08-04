import { DISPLAY_TOAST, HIDE_TOAST } from 'redux/actions';

const toasts = (state = {}, action) => {
  switch (action.type) {
    case DISPLAY_TOAST: {
      return {
        visible: true,
        title: action.title,
        body: action.body,
        toastType: action.toastType
      };
    }
    case HIDE_TOAST: {
      return {
        visible: false,
        title: '',
        body: '',
        toastType: ''
      };
    }
    default: {
      return state;
    }
  }
};

export default toasts;
