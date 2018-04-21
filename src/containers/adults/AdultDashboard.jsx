import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react';

import DashboardActivityCard from 'components/activities/DashboardActivityCard';

import styles from './AdultDashboard.css';

const AdultDashboard = props => {
  const { activities, approvalQueue, activeUser, users } = props;

  const getApproveeName = requesterId =>  users.find(user => user.id === requesterId);

  const getActiveUsersApprovalActivities = () => {
    return approvalQueue
      .filter(approvals => approvals.approverId === activeUser.id)
      .map((activity, index) => {
        const activityApprovalObject = {
          activity: activities.find(a => activity.activityId === a.id),
          requesterName: getApproveeName(activity.requesterId).name
        }
        return activityApprovalObject
      })
  };

  return (
    <Fragment>
      <h1 className='title'>Dashboard</h1>
      <Card.Group className={styles.activityContainer}>
        {
          getActiveUsersApprovalActivities().map((approvalActivity, index) => (
            <DashboardActivityCard
              key={index}
              user={(approvalActivity.requesterName)}
              points={approvalActivity.activity.points}
              activtyName={approvalActivity.activity.name}
            />
          ))
          
        }
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