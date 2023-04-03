import React from 'react';
import './reserveTableHeading.css';
import restaurantImg from '../images/restaurant.jpg'


const ReserveTableSection = () => {
  return (
    <div className="reserve-table-section">
      <div className="content">
        <h2>Reserve a Table</h2>
      </div>
      <div className="image-container">
        <img src={restaurantImg} alt="Restaurant interior" />
      </div>
    </div>
  );
};

export default ReserveTableSection;
