import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

import styles from './ActivityCard.css';
const cardStyle = styles.cards;

const ActivityCard = props => {
  const { name, points, description, onClick } = props;
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
          <div className="ui two buttons">
            <Button basic color="green" onClick={onClick}>
              Add Activity
            </Button>
          </div>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default ActivityCard;
