import React from 'react';
import Header from './components/header';
import ReserveTableSection from './components/reserveTableHeading';
import ReservationForm from './components/reservationForm';

const ReservationStart = () => {
    return(
      <>
      <Header />
      <ReserveTableSection/>
      <ReservationForm/>
      </>
  )
}

export default ReservationStart