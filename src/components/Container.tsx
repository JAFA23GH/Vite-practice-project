import React from 'react';
import {FaWhatsapp, FaCalendarAlt, FaCog} from 'react-icons/fa';
import './components.css'

function Container({icon, description}) {

  let Logo;

  switch (icon) {
    case 'wa':
      Logo = FaWhatsapp;
      break;
    case 'schedule':
      Logo = FaCalendarAlt;
      break;
    case 'cog':
      Logo = FaCog;
      break;
    default:
      Logo = FaCog;
      break;
  }

    return (
      <div className='item'>
        <div className="item-logo">
          <Logo />
        </div>
        <div className="item-description">
          <h2>{description}</h2>
        </div>
      </div>
    );
  }

export default Container;
