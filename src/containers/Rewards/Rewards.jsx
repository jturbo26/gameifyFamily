import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { Redirect } from 'react-router-dom';
import { isObjectEmpty } from 'utilities';

import { loadRewards } from 'redux/actions/rewards';

const lifecycleHooks = lifecycle({
  componentDidMount() {
    this.props.getRewards();
  }
});

const Rewards = props => {
  const { rewards, activeUser } = props;
  const activeUserLoaded = isObjectEmpty(activeUser);
  return !activeUserLoaded ? (
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
  ) : (
    <Redirect to="/?redirect=rewards" />
  );
};

Rewards.propTypes = {
  rewards: PropTypes.array,
  activeUser: PropTypes.object
};

const mapStateToProps = state => ({
  rewards: state.rewards,
  activeUser: state.activeUser
});

const mapDispatchToProps = {
  createActivity: (name, description, points) => createNewActivity(name, description, points),
  getRewards: () => loadRewards()
};

export const RewardsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycleHooks
)(Rewards);
