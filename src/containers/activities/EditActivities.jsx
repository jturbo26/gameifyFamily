import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import styles from './EditActivities.css';
import { Input, TextArea, Label, Button } from 'semantic-ui-react';

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
    removeActivity
  } = props;
  const onSubmit = e => {
    e.preventDefault();
    createActivity(activityName, activityDescription, activityPoints).then(action => {
      displaySuccessToast('', 'Activity Created Successfully');
    });
  };
  return (
    <Fragment>
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
        <Button type="submit">Create Activity</Button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  activityName: state.form.activityName,
  activityDescription: state.form.activityDescription,
  activityPoints: state.form.activityPoints,
  activities: state.activities
});

const mapDispatchToProps = dispatch => ({
  createActivity: (name, description, points) =>
    createNewActivity(dispatch, name, description, points),
  updateFormField: (fieldName, value) => dispatch(updateField(fieldName, value)),
  displaySuccessToast: (title, body, timeout) => dispatch(displayToast(title, body, timeout)),
  removeActivity: activityId => dispatch(deleteActivity(activityId))
});

export const EditActivities = connect(mapStateToProps, mapDispatchToProps)(EditActivitiesContainer);
