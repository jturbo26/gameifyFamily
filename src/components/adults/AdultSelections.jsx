import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const AdultSelections = props => {
  // const { users, activeUser } = props;
  return (
    <Fragment>
      <Link to="adult-dashboard">
        <Button>Dashboard</Button>
      </Link>
      <Link to="activities">
        <Button>Activities</Button>
      </Link>
    </Fragment>
  );
};

export default AdultSelections;
