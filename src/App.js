import React from 'react';
import './App.css';
import ReservationStart from './reservationStart'
import { Routes, Route } from 'react-router-dom';

import ReservationMid from './reservationMid';

import ReservationEnd from './reservationEnd';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ReservationStart />} initial/>
        <Route path="/reservationMid" element={<ReservationMid />} />
        <Route path="/reservationEnd" element={<ReservationEnd />} />
      </Routes>
    </div>
  );
}

export default App;
