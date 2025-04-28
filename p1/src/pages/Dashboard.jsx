import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const registros = [
    { oficina: 'Oficina 1', hora: '09:00', fecha: '2025-04-27', empresa: 'Empresa A', tipoAcceso1: 'Entrada', tipoAcceso2: 'Manual' },
    { oficina: 'Oficina 2', hora: '09:30', fecha: '2025-04-27', empresa: 'Empresa B', tipoAcceso1: 'Entrada', tipoAcceso2: 'QR' },
    { oficina: 'Oficina 3', hora: '10:00', fecha: '2025-04-27', empresa: 'Empresa C', tipoAcceso1: 'Salida', tipoAcceso2: 'RFID' },
    { oficina: 'Oficina 4', hora: '10:30', fecha: '2025-04-27', empresa: 'Empresa D', tipoAcceso1: 'Entrada', tipoAcceso2: 'QR' },
    { oficina: 'Oficina 5', hora: '11:00', fecha: '2025-04-27', empresa: 'Empresa E', tipoAcceso1: 'Salida', tipoAcceso2: 'Manual' },
    { oficina: 'Oficina 6', hora: '11:30', fecha: '2025-04-27', empresa: 'Empresa F', tipoAcceso1: 'Entrada', tipoAcceso2: 'RFID' },
  ];

  return (
    <div className="dashboard-container">
      
      <div className="content">
        <h2>Registro de acceso a salas</h2>
        <table className="access-table">
          <thead>
            <tr>
              <th>Oficina</th>
              <th>Hora</th>
              <th>Fecha</th>
              <th>Empresa</th>
              <th>T.acceso</th>
              <th>T.acceso</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => (
              <tr key={index}>
                <td>{registro.oficina}</td>
                <td>{registro.hora}</td>
                <td>{registro.fecha}</td>
                <td>{registro.empresa}</td>
                <td>{registro.tipoAcceso1}</td>
                <td>{registro.tipoAcceso2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
