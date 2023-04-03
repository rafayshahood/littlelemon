import React from 'react';
import './reservationForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NumberInput = ({ label, value, setValue }) => {
  return (
    <div className="input-container">
      <label>{label}:</label>
      <div className="number-input">
        <button type="button" onClick={() => setValue(value - 1)}>-</button>
        <input type="number" value={value} readOnly />
        <button type="button" onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );
};

const ReservationForm = () => {
  return (
    <div className='reservation-form'>
      <h1>Table Reservation</h1>
      <Formik
        initialValues={{ date: '', time: '', adults: 1, children: 0 }}
        validate={values => {
          const errors = {};
          if (!values.date) {
            errors.date = '* Required';
          }
          if (!values.time) {
            errors.time = '* Required';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          alert('Reservation successfully submitted!');
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="input-container">
              <label htmlFor="date">Date:</label>
              <Field type="date" name="date" id="date" />
            </div>
            <ErrorMessage name="date" component="div" />

            <div className="input-container">
              <label htmlFor="time">Time:</label>
              <Field type="time" name="time" id="time" />
            </div>
            <ErrorMessage name="time" component="div" />

            <NumberInput
              label="Adults"
              value={values.adults}
              setValue={(value) => setFieldValue('adults', Math.max(value, 1))}
            />

            <NumberInput
              label="Children"
              value={values.children}
              setValue={(value) => setFieldValue('children', Math.max(value, 0))}
            />

            <button type="submit" disabled={isSubmitting}>
              Proceed
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;
