import React, { Fragment } from 'react';
import { connect, dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { addActivity } from 'redux/actions/approvalQueue';
import ActivityCard from 'components/activities/ActivityCard';

import isEmpty from 'lodash/isEmpty';
import styles from './ActivityContainer.css';

const ActivityContainer = props => {
  const { users, activeUser, activities, addActivityApprovalQueue } = props;
  return (
    <div className={styles.activityOuter}>
      {isEmpty(activeUser) ? (
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
                onClick={() => {
                  return addActivityApprovalQueue(activity, activeUser.id, activeUser.approvers);
                }}
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
  activeUser: state.activeUser,
  activities: state.activities
});

const mapDispatchToProps = dispatch => ({
  addActivityApprovalQueue: (activity, requesterId, approverId) =>
    dispatch(addActivity(activity, requesterId, approverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer);
