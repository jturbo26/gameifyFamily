import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import PointsCircle from 'components/header/PointsCircle';

import styles from './Header.css';

const Header = ({
  user
}) => (
  <div className={styles.headerContainer}>
  {
    Object.keys(user).length > 0 ? (
      <React.Fragment>
        <Link to="/"><h4>Rewards</h4></Link>
        <div className={styles.pointsContainer}>
          <PointsCircle
            primaryColor={user.primaryColor}
            secondaryColor={user.secondaryColor}
            pointsValue={user.pointsValue}
          />
        </div>
        <div className={styles.welcomeText}><h3>Welcome {user.name}</h3></div>
      </React.Fragment>
    ) :
    <div className={styles.selectUserText}>Please Select a User</div>
  }
  
  </div>
)

export default Header;
