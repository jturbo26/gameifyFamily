import React from 'react';
import { Button, Card, Image, Popup } from 'semantic-ui-react';

import styles from './ActivityCard.css';
const cardStyle = styles.cards;

const ActivityCard = props => {
  const { name, points, description, onClick, disabled } = props;
  return (
    <React.Fragment>
      <Card className={cardStyle}>
        <Card.Content>
          <Image floated="right" size="mini" src="http://via.placeholder.com/50x50" />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>Activity worth {points} points</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="green" onClick={onClick}>
            Add Activity
          </Button>
          {/* TODO: Make the addActivity button dependant on the
          disabled prop so it can be disabled when the activity
          is on lockout */}
          {/* {disabled ? (
            <Popup
              trigger={
                <div className="ui two buttons">
                  <Button disabled basic color="green" onClick={onClick}>
                    Add Activity
                  </Button>
                </div>
              }
              content="Must wait X time to add again!"
            />
          ) : (
            <Button basic color="green" onClick={onClick}>
              Add Activity
            </Button>
          )} */}
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default ActivityCard;
