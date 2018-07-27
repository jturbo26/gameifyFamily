import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import PointsCircle from 'components/header/PointsCircle';

import styles from './Header.css';

const Header = ({ user }) => (
  <div className={styles.headerContainer}>
    {Object.keys(user).length > 0 ? (
      <React.Fragment>
        <Link to="/rewards" className={styles.rewardLink}>
          <h3>Rewards</h3>
        </Link>
        {user.roles.includes('admin') || user.roles.includes('adult') ? (
          <Link to="edit-activities" className={styles.editLink}>
            Edit Activities
          </Link>
        ) : (
          ''
        )}
        <div className={styles.pointsContainer}>
          <PointsCircle
            primaryColor={user.primaryColor}
            secondaryColor={user.secondaryColor}
            pointsValue={user.pointsValue}
          />
        </div>
        <Link to="/user-settings" className={styles.welcomeText}>
          <h3>Welcome {user.name}</h3>
        </Link>
      </React.Fragment>
    ) : (
      <div className={styles.selectUserText}>Please Select a User</div>
    )}
  </div>
);

Header.propTypes = {
  users: PropTypes.array
};

export default Header;
