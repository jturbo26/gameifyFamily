import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Button } from 'semantic-ui-react';

import Header from 'containers/Header/Header';
import UserSelection from 'containers/users/UserSelection';
import ActivityContainer from 'containers/activities/ActivityContainer';
import AdultSelections from 'components/adults/AdultSelections';
import AdultDashboard from 'containers/adults/AdultDashboard';

import './App.css';
import '../global.css';

const App = props => {
  const { users, activeUser } = props;
  return (
    <div>
      <Header user={activeUser} />
      <Route exact path="/" component={UserSelection} />
      <Route exact path="/activities" component={ActivityContainer} />
      <Route path="/adults" component={AdultSelections} />
      <Route path="/adult-dashboard" component={AdultDashboard} />
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  activeUser: state.activeUser
});

export default withRouter(connect(mapStateToProps, null)(App));
