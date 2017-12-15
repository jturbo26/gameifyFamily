import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from 'components/Input';

const submitForm = e => {
  console.log('Form submitted!');
};

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label htmlFor="username">Username:</label>
      <Field name="username" component={Input} type="text" />
      <label htmlFor="password">Password:</label>
      <Field name="password" component={Input} type="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
