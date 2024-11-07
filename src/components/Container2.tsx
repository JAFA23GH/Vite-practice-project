import React from 'react';
import {FaCalendarAlt} from 'react-icons/fa';
import './components.css'

function Container2() {
    return (
      <div className='item'>
        <div className="item-logo">
          <FaCalendarAlt />
        </div>
        <div className="item-description">
          <h2>Agenda una cita</h2>
        </div>
      </div>
    );
  }

export default Container2;
