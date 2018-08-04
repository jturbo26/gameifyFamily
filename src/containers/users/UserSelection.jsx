import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Link } from 'react-router-dom';
import { history } from 'redux/store';
import { parseQueryParam } from 'utilities';

import { Button } from 'semantic-ui-react';

import { updateActiveUser } from 'redux/actions/updateActiveUser';
import { displayToast } from 'redux/actions/toasts';

import globalStyles from 'global.css';

const enhance = lifecycle({
  componentDidMount() {
    this.props.setActiveUser({});
    if (this.props.queryParam !== '') {
      const queryParamObject = parseQueryParam(this.props.queryParam);
      if (queryParamObject.type === 'redirect') {
        this.props.displayErrorToast(
          `You've been redirected`,
          `You must be logged in to view ${queryParamObject.from}.`,
          'error'
        );
      }
    }
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

UserSelectionContainer.propTypes = {
  users: PropTypes.array,
  setActiveUser: PropTypes.func
};

const mapStateToProps = state => ({
  users: state.userData,
  currentActiveUser: state.activeUser,
  queryParam: state.router.location.search
});

const mapDispatchToProps = {
  setActiveUser: user => updateActiveUser(user),
  displayErrorToast: (title, body, toastType, timeout) =>
    displayToast(title, body, toastType, timeout)
};

export const UserSelection = compose(connect(mapStateToProps, mapDispatchToProps), enhance)(
  UserSelectionContainer
);
