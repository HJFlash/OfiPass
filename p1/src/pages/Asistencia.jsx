import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Asistencia = () => {
  const { oficinaId } = useParams();
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const hoy = new Date().toLocaleString();

    // Obtener asistencias anteriores
    const asistenciasPrevias = JSON.parse(localStorage.getItem('asistencias')) || [];

    // Agregar nueva asistencia
    const nuevaAsistencia = {
      oficina: decodeURIComponent(oficinaId),
      fecha: hoy
    };

    const asistenciasActualizadas = [...asistenciasPrevias, nuevaAsistencia];

    // Guardar en localStorage
    localStorage.setItem('asistencias', JSON.stringify(asistenciasActualizadas));

    setMensaje(`Asistencia registrada para oficina: ${nuevaAsistencia.oficina} a las ${nuevaAsistencia.fecha}`);
  }, [oficinaId]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>✅ Asistencia Registrada</h1>
      <p>{mensaje}</p>
    </div>
  );
};

export default Asistencia;
