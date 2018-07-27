import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// import styles from './EditActivities.css';

const RewardsContainer = props => {
  const { rewards } = props;

  return (
    <div>
      {rewards.map(reward => {
        return (
          <div key={reward.id}>
            <span>{reward.name} - </span>
            <span>cost: {reward.cost}</span>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  rewards: state.rewards
});

const mapDispatchToProps = dispatch => ({
  createActivity: (name, description, points) =>
    createNewActivity(dispatch, name, description, points)
});

export const Rewards = connect(mapStateToProps, mapDispatchToProps)(RewardsContainer);
