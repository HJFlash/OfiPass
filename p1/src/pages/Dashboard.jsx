import React, { useState } from 'react';
import './Dashboard.css';
import { QRCodeCanvas } from 'qrcode.react';

const Dashboard = () => {
  const [vista, setVista] = useState('inicio');
  const [seleccion, setSeleccion] = useState(null);
  const [mostrarQR, setMostrarQR] = useState(false);
  const [codigoQR, setCodigoQR] = useState('');

  const registros = [
    { id: 1, usuario: 'Juan Pérez', oficina: 'Oficina 1', hora: '09:00', fecha: '2025-04-27', empresa: 'Empresa A', tipoAcceso1: 'Entrada', tipoAcceso2: 'Manual' },
    { id: 2, usuario: 'Ana Torres', oficina: 'Oficina 2', hora: '09:30', fecha: '2025-04-27', empresa: 'Empresa B', tipoAcceso1: 'Entrada', tipoAcceso2: 'QR' },
    { id: 3, usuario: 'Luis Gómez', oficina: 'Oficina 3', hora: '10:00', fecha: '2025-04-27', empresa: 'Empresa C', tipoAcceso1: 'Salida', tipoAcceso2: 'RFID' },
    { id: 4, usuario: 'Juan Pérez', oficina: 'Oficina 1', hora: '10:15', fecha: '2025-04-27', empresa: 'Empresa A', tipoAcceso1: 'Salida', tipoAcceso2: 'QR' },
    { id: 5, usuario: 'Ana Torres', oficina: 'Oficina 3', hora: '11:00', fecha: '2025-04-27', empresa: 'Empresa D', tipoAcceso1: 'Entrada', tipoAcceso2: 'Manual' },
  ];

  const oficinas = [...new Set(registros.map(r => r.oficina))];
  const usuarios = [...new Set(registros.map(r => r.usuario))];

  const eliminarRegistro = (id) => {
    alert(`Eliminarías el registro con ID: ${id} (solo simulado en esta demo)`);
  };

  const registrosFiltrados = registros.filter(r =>
    (vista === 'oficina' && r.oficina === seleccion) ||
    (vista === 'usuario' && r.usuario === seleccion)
  );

  const handleSeleccionarOficina = (oficina) => {
    setSeleccion(oficina);
    setVista('opcionesOficina');
  };

  const handleGenerarQR = () => {
    setCodigoQR(`URL para la oficina ${seleccion}`);
    setMostrarQR(true);
  };

  const handleVerRegistros = () => {
    setVista('oficina');
    setMostrarQR(false);
  };

  return (
    <div className="dashboard-container">
      <div className="content">
        {vista === 'inicio' && (
          <>
            <h2>¿Qué deseas revisar?</h2>
            <div className="filter-container" style={{ justifyContent: 'center' }}>
              <button className="edit-btn" onClick={() => setVista('oficina')}>Oficinas</button>
              <button className="edit-btn" onClick={() => setVista('usuario')}>Usuarios</button>
            </div>
          </>
        )}

        {(vista === 'oficina' || vista === 'usuario') && !seleccion && (
          <>
            <h2>Selecciona una {vista}</h2>
            <div className="filter-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
              {(vista === 'oficina' ? oficinas : usuarios).map(item => (
                <button key={item} className="edit-btn" onClick={() => vista === 'oficina' ? handleSeleccionarOficina(item) : setSeleccion(item)}>{item}</button>
              ))}
              <button className="delete-btn" onClick={() => setVista('inicio')}>← Volver</button>
            </div>
          </>
        )}

        {vista === 'opcionesOficina' && (
          <>
            <h2>Selecciona una opción para {seleccion}</h2>
            <div className="filter-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
              <button className="edit-btn" onClick={handleGenerarQR}>Generar Código QR</button>
              <button className="edit-btn" onClick={handleVerRegistros}>Ver Registros de Oficina</button>
              <button className="delete-btn" onClick={() => setVista('inicio')}>← Volver</button>
            </div>
          </>
        )}

        {mostrarQR && (
          <div className="qr-container">
            <h3>Código QR para {seleccion}</h3>
            <QRCodeCanvas value={`https://ofi-pass.vercel.app/asistencia/${encodeURIComponent(seleccion)}`} />

          </div>
        )}

        {(vista === 'oficina' || vista === 'usuario') && seleccion && !mostrarQR && (
          <>
            <h2>{vista === 'oficina' ? `Registros de ${seleccion}` : `Historial de ${seleccion}`}</h2>
            <table className="access-table">
              <thead>
                <tr>
                  {vista === 'oficina' ? <th>Usuario</th> : <th>Oficina</th>}
                  <th>Hora</th>
                  <th>Fecha</th>
                  <th>Empresa</th>
                  <th>T.acceso</th>
                  <th>T.acceso</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {registrosFiltrados.map((r) => (
                  <tr key={r.id}>
                    <td>{vista === 'oficina' ? r.usuario : r.oficina}</td>
                    <td>{r.hora}</td>
                    <td>{r.fecha}</td>
                    <td>{r.empresa}</td>
                    <td>{r.tipoAcceso1}</td>
                    <td>{r.tipoAcceso2}</td>
                    <td>
                      <button className="delete-btn" onClick={() => eliminarRegistro(r.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="filter-container" style={{ justifyContent: 'center' }}>
              <button className="delete-btn" onClick={() => { setSeleccion(null); }}>← Elegir otra {vista}</button>
              <button className="edit-btn" onClick={() => { setVista('inicio'); setSeleccion(null); }}>🏠 Volver al inicio</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
