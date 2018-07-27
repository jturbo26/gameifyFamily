import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './EditActivities.css';
import { Input, TextArea, Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { isObjectEmpty } from 'utilities';

import { createNewActivity, deleteActivity } from 'redux/actions/activities';
import { displayToast } from 'redux/actions/toasts';
import { updateField } from 'redux/actions/form';

const EditActivitiesContainer = props => {
  const {
    createActivity,
    updateFormField,
    activityName,
    activityDescription,
    activityPoints,
    displaySuccessToast,
    activities,
    removeActivity,
    activeUser
  } = props;
  const onSubmit = e => {
    e.preventDefault();
    createActivity(activityName, activityDescription, activityPoints).then(action => {
      displaySuccessToast('', 'Activity Created Successfully');
    });
  };
  const activeUserLoaded = isObjectEmpty(activeUser);
  return (
    <Fragment>
      {!activeUserLoaded ? (
        <div>
          {activities.map(activity => {
            return (
              <div key={activity.id}>
                <span>{activity.name}</span> -
                <span> {activity.points}</span> -
                <span className={styles.removeX} onClick={() => removeActivity(activity.id)}>
                  {' '}
                  X
                </span>
              </div>
            );
          })}
          <form className={styles.addActivityContainer} onSubmit={e => onSubmit(e)}>
            <Input
              fluid
              label="Activity Name"
              onChange={e => updateFormField('activityName', e.target.value)}
              className={styles.addActivityField}
            />
            <Label>Activity Description</Label>
            <TextArea
              autoHeight
              onChange={e => updateFormField('activityDescription', e.target.value)}
              className={[styles.addActivityField, styles.description].join(' ')}
            />
            <Input
              fluid
              label="Activity Points"
              type="number"
              max={100}
              onChange={e => updateFormField('activityPoints', e.target.value)}
              className={styles.addActivityField}
            />
            <Input
              fluid
              label="Activity Frequency"
              type="number"
              max={10}
              onChange={e => updateFormField('activityFrequency', e.target.value)}
              className={styles.addActivityField}
            />
            <Button type="submit">Create Activity</Button>
          </form>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
};

EditActivitiesContainer.propTypes = {
  createActivity: PropTypes.func,
  updateFormField: PropTypes.func,
  activityName: PropTypes.string,
  activityDescription: PropTypes.string,
  activityPoints: PropTypes.string,
  activityFrequency: PropTypes.number,
  displaySuccessToast: PropTypes.func,
  activities: PropTypes.array,
  removeActivity: PropTypes.func,
  activeUser: PropTypes.object
};

const mapStateToProps = state => ({
  activityName: state.form.activityName,
  activityDescription: state.form.activityDescription,
  activityPoints: state.form.activityPoints,
  activityFrequency: state.form.activityFrequency,
  activities: state.activities,
  activeUser: state.activeUser
});

const mapDispatchToProps = dispatch => ({
  createActivity: (name, description, points, frequency) =>
    createNewActivity(dispatch, name, description, points, frequency),
  updateFormField: (fieldName, value) => dispatch(updateField(fieldName, value)),
  displaySuccessToast: (title, body, timeout) => dispatch(displayToast(title, body, timeout)),
  removeActivity: activityId => dispatch(deleteActivity(activityId))
});

export const EditActivities = connect(mapStateToProps, mapDispatchToProps)(EditActivitiesContainer);
