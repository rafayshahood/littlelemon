import React, { useState } from 'react';
import './bookingForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const NumberInput = ({ label, value, setValue, className }) => {
  return (
    <div className='input-container'>
      <label>{label}:</label>
      <div className={className}>
        <button type="button" onClick={() => setValue(value - 1)}>-</button>
        <input type="number" value={value} readOnly />
        <button type="button" onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );
};

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [occasion, setOccasion] = useState('');

  const validationSchema = Yup.object({
    date: Yup.date()
      .required('Date is required')
      .min(new Date(), 'Date cannot be in the past'),
    time: Yup.string().required('Time is required'),
    occasion: Yup.string().required('Occasion is required'),
  });

  return (
    <div className='reservation-form'>
      <h1>Table Reservation</h1>
      <Formik
        initialValues={{ date, time, adults, children, occasion }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          navigate('/reservationMid');
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-container-A">
              <label htmlFor="date">Date:</label>
              <Field type="date" name="date" id="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>

            <div className="input-container-A">
              <label htmlFor="time">Time:</label>
              <Field as="select" name="time" id="time">
                <option value="">Select a time</option>
                {availableTimes.map((t, index) => (
                  <option key={index} value={t}>{t}</option>
                ))}
              </Field>
              <ErrorMessage name="time" component="div" className="error" />
            </div>

            <div className="input-container">
              <label htmlFor="occasion">Occasion:</label>
              <Field as="select" name="occasion" id="occasion">
                <option value="">Select an occasion</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Birthday">Birthday</option>
              </Field>
              <ErrorMessage name="occasion" component="div" className="error" />
            </div>

            <NumberInput
              label="Adults"
              value={adults}
              setValue={(value) => setAdults(Math.max(value, 1))}
              className="number-input-A"
            />

            <NumberInput
              label="Children"
              value={children}
              setValue={(value) => setChildren(Math.max(value, 0))}
              className="number-input-B"
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

export default BookingForm;
