import React, { Fragment } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import styles from './DashboardActivityCard.css';

const DashboardActivityCard = props => {
  const { user, points, activtyName } = props;
  return (
    <Fragment>
      <Card className={styles.cards}>
        <Card.Content>
          <Image floated="right" size="mini" src="http://via.placeholder.com/50x50" />
          <Card.Header>Approval for {user}</Card.Header>
          <Card.Meta>Activity worth {points} points</Card.Meta>
          <Card.Description>
            {user} completed the activity named{' '}
            <span className={styles.activityName}>{activtyName}</span>.
            <div>Please approve or deny point award!</div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve Activity
            </Button>
            <Button basic color="red">
              Deny Activity
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Fragment>
  );
};

export default DashboardActivityCard;
