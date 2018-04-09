import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import isEmpty from 'lodash/isEmpty';


const ActivityContainer = props => {
  const { users, currentActiveUser } = props;
  return (
    <div>
      {
        isEmpty(currentActiveUser) ? 
        (
          <h1>No user Selected. Please <Link to='/'>select a user!</Link></h1>
        )
        :
        <h1>Activity Container</h1>
      }
      
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  currentActiveUser: state.activeUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer);
