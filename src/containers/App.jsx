import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Button } from 'semantic-ui-react';

import Header from 'containers/Header/Header';
import ToastContainer from 'containers/Toasts/ToastContainer';
import UserSelection from 'containers/users/UserSelection';
import ActivityContainer from 'containers/activities/ActivityContainer';
import EditActivities from 'containers/activities/EditActivities';
import AdultSelections from 'components/adults/AdultSelections';
import AdultDashboard from 'containers/adults/AdultDashboard';

import './App.css';
import '../global.css';

const App = props => {
  const { users, activeUser, toastVisibility } = props;
  return (
    <div>
      <Header user={activeUser} />
      {toastVisibility ? <ToastContainer /> : ''}

      <Route exact path="/" component={UserSelection} />
      <Route exact path="/activities" component={ActivityContainer} />
      <Route exact path="/edit-activities" component={EditActivities} />
      <Route path="/adults" component={AdultSelections} />
      <Route path="/adult-dashboard" component={AdultDashboard} />
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  activeUser: state.activeUser,
  toastVisibility: state.toasts.visible
});

export default withRouter(connect(mapStateToProps, null)(App));
