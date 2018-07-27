import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideToast } from 'redux/actions/toasts';

import styles from './ToastContainer.css';

const ToastContainer = props => {
  const { title, body, closeToast } = props;
  return (
    <div className={styles.toastContainer}>
      <div className={[styles.toast, styles.toast__success].join(' ')} onClick={() => closeToast}>
        {body}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  title: state.toasts.title,
  body: state.toasts.body
});

const mapDispatchToProps = dispatch => ({
  closeToast: () => hideToast()
});

ToastContainer.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  closeToast: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer);
