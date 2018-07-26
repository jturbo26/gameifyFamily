import React from 'react';
import { connect } from 'react-redux';

import styles from './EditActivities.css';
import { Input, TextArea, Label, Button } from 'semantic-ui-react';

import { createNewActivity } from 'redux/actions/activities';
import { displayToast } from 'redux/actions/toasts';
import { updateField } from 'redux/actions/form';

const EditActivitiesContainer = props => {
  const {
    createActivity,
    updateFormField,
    activityName,
    activityDescription,
    activityPoints,
    displaySuccessToast
  } = props;
  const onSubmit = e => {
    e.preventDefault();
    createActivity(activityName, activityDescription, activityPoints).then(action => {
      displaySuccessToast('', 'Activity Created Successfully');
    });
  };
  return (
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
  );
};

const mapStateToProps = state => ({
  activityName: state.form.activityName,
  activityDescription: state.form.activityDescription,
  activityPoints: state.form.activityPoints
});

const mapDispatchToProps = dispatch => ({
  createActivity: (name, description, pointsValue) =>
    createNewActivity(dispatch, name, description, pointsValue),
  updateFormField: (fieldName, value) => dispatch(updateField(fieldName, value)),
  displaySuccessToast: (title, body, timeout) => dispatch(displayToast(title, body, timeout))
});

export const EditActivities = connect(mapStateToProps, mapDispatchToProps)(EditActivitiesContainer);
