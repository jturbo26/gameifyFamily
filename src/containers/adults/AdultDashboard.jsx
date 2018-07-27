import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addPointsToUser, createUserRecord } from 'redux/actions/users';
import { removeApprovalFromQueue } from 'redux/actions/approvalQueue';

import { Card } from 'semantic-ui-react';
import PointsCircle from 'components/header/PointsCircle';
import DashboardActivityCard from 'components/activities/DashboardActivityCard';

import styles from './AdultDashboard.css';

const AdultDashboardContainer = props => {
  const {
    activities,
    approvalQueue,
    activeUser,
    users,
    addPoints,
    removeApproval,
    createRecord
  } = props;

  const getApprovee = requesterId => users.find(user => user.id === requesterId);

  const getActiveUsersApprovalActivities = () => {
    return approvalQueue
      .filter(approvals => approvals.approvers.includes(activeUser.id))
      .map(activity => {
        const activityApprovalObject = {
          approvalId: activity.approvalId,
          activity: activities.find(a => activity.activityId === a.id),
          requesterName: getApprovee(activity.requesterId).name
        };
        return activityApprovalObject;
      });
  };

  const getUsersIApprove = () => users.filter(user => activeUser.approverFor.includes(user.id));

  return (
    <Fragment>
      <h1 className="title">Dashboard</h1>
      <div className={styles.pointsContainer}>
        {getUsersIApprove().map(user => (
          <PointsCircle
            key={user.id}
            primaryColor={user.primaryColor}
            secondaryColor={user.secondaryColor}
            pointsValue={user.pointsValue}
          />
        ))}
      </div>
      <Card.Group className={styles.activityContainer}>
        {getActiveUsersApprovalActivities().map((approvalActivity, index) => {
          const userToApprove = users.find(user => user.name === approvalActivity.requesterName);
          return (
            <DashboardActivityCard
              key={index}
              user={approvalActivity.requesterName}
              points={approvalActivity.activity.points}
              activtyName={approvalActivity.activity.name}
              approveActivity={() => {
                addPoints(userToApprove, approvalActivity.activity.points);
                removeApproval(approvalActivity.approvalId);
                createRecord(
                  userToApprove,
                  approvalActivity.activity.id,
                  approvalActivity.activity.name
                );
              }}
              denyActivity={() => removeApproval(approvalActivity.approvalId)}
            />
          );
        })}
      </Card.Group>
    </Fragment>
  );
};

AdultDashboardContainer.propTypes = {
  activities: PropTypes.array,
  approvalQueue: PropTypes.array,
  activeUser: PropTypes.object,
  users: PropTypes.array,
  addPoints: PropTypes.func,
  removeApproval: PropTypes.func,
  createRecord: PropTypes.func
};

const mapStateToProps = state => ({
  activities: state.activities,
  approvalQueue: state.approvalQueue,
  activeUser: state.activeUser,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  addPoints: (user, points) => dispatch(addPointsToUser(user, points)),
  removeApproval: approvalId => dispatch(removeApprovalFromQueue(approvalId)),
  createRecord: (user, activityId, activityName) =>
    dispatch(createUserRecord(user, activityId, activityName))
});

export const AdultDashboard = connect(mapStateToProps, mapDispatchToProps)(AdultDashboardContainer);
