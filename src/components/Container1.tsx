// import React from "react";
import React from 'react';
import {FaWhatsapp} from 'react-icons/fa';
import './components.css'

function Container1() {
    return (
      <div className='item'>
        <div className="item-logo">
          <FaWhatsapp />
        </div>
        <div className="item-description">
          <h2>Solicita una cotización</h2>
        </div>
      </div>
    );
  }

export default Container1;
