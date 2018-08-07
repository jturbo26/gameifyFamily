import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { lifecycle, compose } from 'recompose';
import { isObjectEmpty } from 'utilities';

import styles from './EditActivities.css';
import { Input, TextArea, Label, Button } from 'semantic-ui-react';

import { createNewActivity, deleteActivity } from 'redux/actions/activities';
import { loadActivities } from 'redux/actions/activities';
import { displayToast } from 'redux/actions/toasts';
import { updateField } from 'redux/actions/form';

const lifecycleHooks = lifecycle({
  componentDidMount() {
    this.props.getActivities();
  }
});

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
    createActivity(activityName, activityDescription, activityPoints);
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
            <Button
              disabled={!activityName || !activityDescription || !activityPoints}
              type="submit"
            >
              Create Activity
            </Button>
          </form>
        </div>
      ) : (
        <Redirect to="/?redirect=edit-activities" />
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
  activityFrequency: PropTypes.string,
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

const mapDispatchToProps = {
  createActivity: (name, description, points, frequency) =>
    createNewActivity(name, description, points, frequency),
  updateFormField: (fieldName, value) => updateField(fieldName, value),
  displaySuccessToast: (title, body, type, timeout) => displayToast(title, body, type, timeout),
  removeActivity: activityId => deleteActivity(activityId),
  getActivities: () => loadActivities()
};

export const EditActivities = compose(connect(mapStateToProps, mapDispatchToProps), lifecycleHooks)(
  EditActivitiesContainer
);
