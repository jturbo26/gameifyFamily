import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Link } from 'react-router-dom';
import { history } from 'redux/store';

import { Button } from 'semantic-ui-react';

import { updateActiveUser } from 'redux/actions/updateActiveUser';

import globalStyles from 'global.css';

const enhance = lifecycle({
  componentDidMount() {
    this.props.setActiveUser({});
  }
});

const UserSelectionContainer = props => {
  const { users, setActiveUser } = props;

  return (
    <div>
      <h1 className={globalStyles.title}>User Selection Container</h1>
      {users.map(user => (
        <Button
          key={user.id}
          onClick={() => {
            setActiveUser(users.find(u => u.name === user.name));
            if (user.roles.includes('adult')) {
              history.push('/adults');
            } else {
              history.push('/activities');
            }
          }}
        >
          {user.name}
        </Button>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  currentActiveUser: state.activeUser
});

const mapDispatchToProps = dispatch => ({
  setActiveUser: user => dispatch(updateActiveUser(user))
});

export const UserSelection = compose(connect(mapStateToProps, mapDispatchToProps), enhance)(
  UserSelectionContainer
);
