// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Container from './components/Container';
import './App.css'


function App() {

  return (
    <div className='boxes'>
      <Container icon="wa" description="Solicita una cotización"/>
      <Container icon="schedule" description="Agenda una cita"/>
      <Container icon="cog" description="Completamos el servicio"/>
    </div>
  ); 

}

export default App
