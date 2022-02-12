import React from 'react';
import { Formik } from 'formik';
import BasicForm from '../components/BasicForm';


const validation = values => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required!';
  } else if (values.name.length <= 1) {
    errors.name = 'Name has to be 1 character at less!';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required!';
  }
  return errors;
}

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values)
          console.log(actions)
          actions.setSubmitting(false);
        }, 1000);
      }}
      validate={validation}
    >
      {props => <BasicForm {...props} />}
    </Formik>
  );
};

export default RegisterForm;