import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import styles from './PointsCircle.css';

const PointsCircle = ({
  pointsValue,
  className,
  primaryColor = '#000000',
  secondaryColor = '#FFFFFF',
  onClick
}) => {
  const userStyles = {
    backgroundColor: secondaryColor,
    border: `1px solid ${primaryColor}`
  };

  return (
    <div
      className={[styles.pointsCircleContainer, className].join(' ')}
      style={userStyles}
      onClick={onClick}
    >
      <p className={styles.pointsText}>{pointsValue}</p>
      <sup>Points</sup>
    </div>
  );
};

PointsCircle.propTypes = {
  pointsValue: PropTypes.number,
  className: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string
};

export default PointsCircle;
