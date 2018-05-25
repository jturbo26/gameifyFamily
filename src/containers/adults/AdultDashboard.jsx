import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react';
import PointsCircle from 'components/header/PointsCircle';
import DashboardActivityCard from 'components/activities/DashboardActivityCard';

import styles from './AdultDashboard.css';

const AdultDashboard = props => {
  const { activities, approvalQueue, activeUser, users } = props;

  const getApproveeName = requesterId => users.find(user => user.id === requesterId);

  const getActiveUsersApprovalActivities = () => {
    return approvalQueue
      .filter(approvals => approvals.approvers.includes(activeUser.id))
      .map(activity => {
        const activityApprovalObject = {
          activity: activities.find(a => activity.activityId === a.id),
          requesterName: getApproveeName(activity.requesterId).name
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
        {getActiveUsersApprovalActivities().map((approvalActivity, index) => (
          <DashboardActivityCard
            key={index}
            user={approvalActivity.requesterName}
            points={approvalActivity.activity.points}
            activtyName={approvalActivity.activity.name}
          />
        ))}
      </Card.Group>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  activities: state.activities,
  approvalQueue: state.approvalQueue,
  activeUser: state.activeUser,
  users: state.users
});

export default connect(mapStateToProps, null)(AdultDashboard);
