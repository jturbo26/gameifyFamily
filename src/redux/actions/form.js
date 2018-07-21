import { UPDATE_FIELD } from 'redux/actions';

export const updateField = (fieldName, value) => ({
  type: UPDATE_FIELD,
  fieldName,
  value
});
