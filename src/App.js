import React from 'react';
import './App.css';
import BookingPage from './bookingPage'
import { Routes, Route } from 'react-router-dom';

import ReservationMid from './reservationMid';

import ReservationEnd from './reservationEnd';
import OpenGraph from './components/openGraph';






function App() {
  return (
    <div className="App">
      <OpenGraph/>

      <Routes>
        <Route exact path="/" element={<BookingPage />} />
        <Route path="/reservationMid" element={<ReservationMid />} />
        <Route path="/reservationEnd" element={<ReservationEnd />} />
      </Routes>

    </div>
  );
}

export default App;
