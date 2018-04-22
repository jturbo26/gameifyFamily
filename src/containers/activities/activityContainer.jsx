import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import ActivityCard from 'components/activities/ActivityCard';

import isEmpty from 'lodash/isEmpty';
import styles from './ActivityContainer.css';

const ActivityContainer = props => {
  const { users, currentActiveUser, activities } = props;
  return (
    <div className={styles.activityOuter}>
      {isEmpty(currentActiveUser) ? (
        <h1 className="title">
          No user Selected. Please <Link to="/">select a user!</Link>
        </h1>
      ) : (
        <Fragment>
          <h1 className="title">Activity Container</h1>
          <Card.Group className={styles.activityContainer}>
            {activities.map(activity => (
              <ActivityCard
                key={activity.id}
                name={activity.name}
                description={activity.description}
                points={activity.points}
              />
            ))}
          </Card.Group>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  currentActiveUser: state.activeUser,
  activities: state.activities
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer);
