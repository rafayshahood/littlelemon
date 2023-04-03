import React, { useState } from 'react';
import './contactForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Route } from 'react-router-dom';
import ReservationEnd from '../reservationEnd';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className='contact-form'>
      <h1>Table Reservation</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', phone: '', email: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = '* Required';
          }
          if (!values.lastName) {
            errors.lastName = '* Required';
          }
          if (!values.phone) {
            errors.phone = '* Required';
          } else if (!/^[0-9]{10}$/i.test(values.phone)) {
            errors.phone = 'Invalid phone number';
          }
          if (!values.email) {
            errors.email = '* Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = '* Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          setSubmitted(true);
          actions.setSubmitting(false);
        }}
        isValid={(errors) => Object.keys(errors).length === 0}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <div className="input-container">
              <label htmlFor="firstName">First Name:</label>
              <Field type="text" name="firstName" id="firstName" />
            </div>
            <ErrorMessage name="firstName" component="div" />

            <div className="input-container">
              <label htmlFor="lastName">Last Name:</label>
              <Field type="text" name="lastName" id="lastName" />
            </div>
            <ErrorMessage name="lastName" component="div" />

            <div className="input-container">
              <label htmlFor="phone">Contact Number:</label>
              <Field type="tel" name="phone" id="phone" />
            </div>
            <ErrorMessage name="phone" component="div" />

            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" id="email" />
            </div>
            <ErrorMessage name="email" component="div" />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </button>

            {submitted && (
              <Route path="/reservationEnd" element={ReservationEnd}>
                {({ history }) => {
                  history.push('/restaurantEnd');
                  return null;
                }}
              </Route>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
