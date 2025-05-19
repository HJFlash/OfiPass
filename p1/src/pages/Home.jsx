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

        <h2>Resumen de actividad</h2>
        <table className="access-table">
          <thead>
            <tr>
              <th>Oficina</th>
              <th>Asistencias hoy</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Oficina Central</td>
              <td>12</td>
              <td><span className="circle green"></span> Activa</td>
            </tr>
            <tr>
              <td>Sucursal Norte</td>
              <td>8</td>
              <td><span className="circle orange"></span> En revisión</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '30px' }}>
          <button className="home-btn">Ver Registros</button>
          <button className="home-btn">Ir al Panel</button>
        </div>

        <div className="important-box">
          <p><strong>⚠️ Importante:</strong> Recuerda no compartir tu código QR con otras personas. Cada código es único y personal.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
