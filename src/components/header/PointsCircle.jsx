import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import styles from './PointsCircle.css';

const PointsCircle = ({
  pointsValue,
  className,
  primaryColor = '#000000',
  secondaryColor = '#FFFFFF'
}) => {
  const userStyles = {
    backgroundColor: secondaryColor,
    border: `1px solid ${primaryColor}`
  };

  return (
    <div className={[styles.pointsCircleContainer, className].join(' ')} style={userStyles}>
      <p className={styles.pointsText}>{pointsValue}</p>
      <sup>Points</sup>
    </div>
  );
};

export default PointsCircle;
