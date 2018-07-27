import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.css';

export const Modal = ({ isOpen, toggleModal, children }) => {
  return (
    <div className={[isOpen ? styles.modal : styles.closedModal].join(' ')}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={toggleModal}>
          X
        </span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  toggleModal: PropTypes.func.isRequired
};
