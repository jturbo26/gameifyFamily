import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter, Route } from 'react-router-dom';
import { lifecycle, compose } from 'recompose';
import { Button } from 'semantic-ui-react';

import Header from 'containers/Header/Header';
import ToastContainer from 'containers/Toasts/ToastContainer';
import { UserSelection } from 'containers/users/UserSelection';
import { Activities } from 'containers/activities/activityContainer';
import { EditActivities } from 'containers/activities/EditActivities';
import { AdultSelections } from 'components/adults/AdultSelections';
import { AdultDashboard } from 'containers/adults/AdultDashboard';
import { RewardsContainer } from 'containers/Rewards/Rewards';

import { loadUsers } from 'redux/actions/userData';

import './App.css';
import '../global.css';

const lifecycleHooks = lifecycle({
  componentDidMount() {
    this.props.getUsers();
  }
});

const App = props => {
  const { users, activeUser, toastVisibility } = props;
  return (
    <div>
      <Header user={activeUser} />
      {toastVisibility ? <ToastContainer /> : ''}

      <Route exact path="/" component={UserSelection} />
      <Route path="/activities" component={Activities} />
      <Route path="/edit-activities" component={EditActivities} />
      <Route path="/adults" component={AdultSelections} />
      <Route path="/adult-dashboard" component={AdultDashboard} />
      <Route path="/rewards" component={RewardsContainer} />
    </div>
  );
};

App.propTypes = {
  users: PropTypes.array,
  activeUser: PropTypes.object,
  toastVisibility: PropTypes.bool,
  getUsers: PropTypes.func
};

const mapStateToProps = state => ({
  users: state.users,
  activeUser: state.activeUser,
  toastVisibility: state.toasts.visible
});

const mapDispatchToProps = {
  getUsers: () => loadUsers()
};

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps), lifecycleHooks)(App)
);
