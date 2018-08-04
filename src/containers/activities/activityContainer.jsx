import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect, dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { lifecycle, compose } from 'recompose';
import moment from 'moment';

import { Card } from 'semantic-ui-react';
import { displayToast } from 'redux/actions/toasts';
import ActivityCard from 'components/activities/ActivityCard';
import { addApprovalToQueue } from 'redux/actions/approvalQueue';
import { loadActivities } from 'redux/actions/activities';

import isEmpty from 'lodash/isEmpty';
import styles from './ActivityContainer.css';

const lifecycleHooks = lifecycle({
  componentDidMount() {
    this.props.getActivities();
  }
});

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
            {activities.map(activity => {
              const shouldBeDisabled = () => {
                const userRecordsMatch = activeUser.userRecords.length
                  ? activeUser.userRecords.find(record => record.activityId === activity.id)
                  : '';
                const recordTimestamp = userRecordsMatch => {
                  if (typeof userRecordsMatch === 'object') {
                    return userRecordsMatch.timestamp;
                  } else return '';
                };
                const recordExpiration =
                  typeof userRecordsMatch === 'object'
                    ? moment(recordTimestamp(userRecordsMatch)).add(activity.frequency, 'days')
                    : '';
                return {
                  flag:
                    recordExpiration &&
                    recordTimestamp(userRecordsMatch) &&
                    moment(recordTimestamp(userRecordsMatch)).isBefore(recordExpiration),
                  timestamp: recordExpiration - recordTimestamp(userRecordsMatch)
                };
              };

              return (
                <ActivityCard
                  key={activity.id}
                  name={activity.name}
                  description={activity.description}
                  points={activity.points}
                  onClick={() => {
                    return addActivityApprovalQueue(activity, activeUser.id, activeUser.approvers);
                  }}
                  timestamp={shouldBeDisabled().timestamp}
                  disabled={shouldBeDisabled().flag}
                />
              );
            })}
          </Card.Group>
        </Fragment>
      )}
    </div>
  );
};

ActivityContainer.propTypes = {
  users: PropTypes.array,
  activeUser: PropTypes.object,
  activities: PropTypes.array,
  addActivityApprovalQueue: PropTypes.func,
  getActivities: PropTypes.func
};

const mapStateToProps = state => ({
  users: state.userData,
  activeUser: state.activeUser,
  activities: state.activities
});

const mapDispatchToProps = {
  addActivityApprovalQueue: (activity, requesterId, approverId) =>
    addApprovalToQueue(activity, requesterId, approverId),
  displaySuccessToast: (title, body, toastType, timeout) =>
    displayToast(title, body, toastType, timeout),
  getActivities: () => loadActivities()
};

export const Activities = compose(connect(mapStateToProps, mapDispatchToProps), lifecycleHooks)(
  ActivityContainer
);
