import React, { useEffect, useState } from 'react';

const VerAsistencias = () => {
  const [asistencias, setAsistencias] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('asistencias')) || [];
    setAsistencias(data);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📋 Asistencias Registradas</h1>
      {asistencias.length === 0 ? (
        <p>No hay asistencias registradas.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Oficina</th>
              <th style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Fecha y hora</th>
            </tr>
          </thead>
          <tbody>
            {asistencias.map((a, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{a.oficina}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{a.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VerAsistencias;
