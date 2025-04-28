import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="dashboard-container">
      <div className="content">
        <h1>Bienvenido a OfiPass</h1>
        <p>Un sistema de gestión de acceso con QR y tarjetas RFID.</p>
        <h2>Instrucciones para utilizar la app móvil:</h2>
        <ul>
          <li>Abre la app OfiPass en tu dispositivo móvil.</li>
          <li>Dirígete a la sección "Acceso" para generar tu código QR único.</li>
          <li>Asegúrate de que el código QR sea claramente visible para el lector en la entrada.</li>
          <li>Si utilizas una tarjeta RFID, simplemente acércala al lector para acceder.</li>
          <li>Si tienes problemas para escanear el QR, prueba a acercar más el dispositivo o limpiar la cámara.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
