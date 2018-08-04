import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideToast } from 'redux/actions/toasts';

import styles from './ToastContainer.css';

const ToastContainer = props => {
  const { title, body, toastType, closeToast } = props;
  const colorClassToastType = type => {
    switch (type) {
      case 'success':
        return 'toast__success';
        break;
      case 'error':
        return 'toast__error';
        break;
      default:
        return 'toast_success';
    }
  };
  return (
    <div className={styles.toastContainer}>
      <div
        className={[styles.toast, styles[colorClassToastType(toastType)]].join(' ')}
        onClick={() => closeToast}
      >
        {body}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  title: state.toasts.title,
  body: state.toasts.body,
  toastType: state.toasts.toastType
});

const mapDispatchToProps = dispatch => ({
  closeToast: () => hideToast()
});

ToastContainer.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  toastType: PropTypes.string,
  closeToast: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer);
