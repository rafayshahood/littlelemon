import React, { useState, useReducer } from 'react';
import Header from './components/header';
import ReserveTableSection from './components/reserveTableHeading';
import ReservationForm from './components/bookingForm';

const initializeTimes = () => ([
  '12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00'
]);

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_AVAILABLE_TIMES':
      // For now, return the same available times regardless of the date.
      return state;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <Header />
      <ReserveTableSection />
      <ReservationForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;
