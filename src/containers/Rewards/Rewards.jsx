import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { Redirect } from 'react-router-dom';
import { isObjectEmpty } from 'utilities';
import styles from './Rewards.css';

import { Input, TextArea, Label, Dropdown, Button } from 'semantic-ui-react';

import { loadRewards, createNewReward } from 'redux/actions/rewards';
import { updateField } from 'redux/actions/form';

const lifecycleHooks = lifecycle({
  componentDidMount() {
    this.props.getRewards();
  }
});

const Rewards = props => {
  const {
    rewards,
    activeUser,
    updateFormField,
    createReward,
    newRewardName,
    newCost,
    newRequiresApproval
  } = props;
  const activeUserLoaded = isObjectEmpty(activeUser);
  const onSubmit = e => {
    e.preventDefault();
    createReward(newRewardName, newCost, newRequiresApproval);
  };
  return !activeUserLoaded ? (
    <Fragment>
      <div>
        {rewards.map(reward => {
          return (
            <div key={reward._id}>
              <span>{reward.name} - </span>
              <span>cost: {reward.cost}</span>
              <span>requiresApproval: {reward.requiresApproval ? 'Y' : 'N'}</span>
            </div>
          );
        })}
      </div>
      <form className={styles.addRewardsContainer} onSubmit={e => onSubmit(e)}>
        <Input
          fluid
          label="Reward Name"
          onChange={e => updateFormField('rewardName', e.target.value)}
          className={styles.addRewardField}
        />
        <Input
          fluid
          label="Cost"
          type="number"
          max={10000}
          onChange={e => updateFormField('cost', e.target.value)}
          className={styles.addRewardField}
        />
        <Dropdown
          placeholder="Approval Required"
          onChange={(e, { value }) => updateFormField('requiresApproval', value)}
          options={[{ text: 'Y', value: 'Y' }, { text: 'N', value: 'N' }]}
        />
        <Button disabled={!newRewardName || !newCost || !newRequiresApproval} type="submit">
          Create Reward
        </Button>
      </form>
    </Fragment>
  ) : (
    <Redirect to="/?redirect=rewards" />
  );
};

Rewards.propTypes = {
  rewards: PropTypes.array,
  activeUser: PropTypes.object,
  createReward: PropTypes.func,
  updateFormField: PropTypes.func,
  getRewards: PropTypes.func,
  newRewardName: PropTypes.string,
  newCost: PropTypes.string,
  newRequiresApproval: PropTypes.string
};

const mapStateToProps = state => ({
  rewards: state.rewards,
  activeUser: state.activeUser,
  newRewardName: state.form.rewardName,
  newCost: state.form.cost,
  newRequiresApproval: state.form.requiresApproval
});

const mapDispatchToProps = {
  createReward: (name, cost, requiresApproval) => createNewReward(name, cost, requiresApproval),
  updateFormField: (fieldName, value) => updateField(fieldName, value),
  getRewards: () => loadRewards()
};

export const RewardsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycleHooks
)(Rewards);
