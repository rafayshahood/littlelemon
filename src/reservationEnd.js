import React from 'react';
import Header from './components/header';
import ReserveTableSection from './components/reserveTableHeading';
import './reservationEnd.css'
import {Link} from 'react-router-dom'

const RestaurantEnd = () => {
    return (
      <div className='restaurant-end'>
        <h1>Reservation Page</h1>
        <p> <b>Congratulations!</b> Your reservation has been confirmed.</p>
        <div className="button-container">
        <Link to='/'><button type='button'>Back to Home</button></Link>
        </div>
      </div>
    );
  };

const ReservationEnd = () => {
    return(
      <>
      <Header />
      <ReserveTableSection/>
      <RestaurantEnd/>
      </>
  )
}

export default ReservationEnd