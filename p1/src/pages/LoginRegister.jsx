import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';

const LoginRegister = ({ setIsAuthenticated }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Función que simula inicio de sesión o registro
  const handleLoginOrRegister = () => {
    setIsAuthenticated(true);
    navigate('/home');
  };

  return (
    <div className="container">
      {!showRegister ? (
        <div className="login-container">
          <div className="left">
            <h2>Ingrese sus datos para iniciar sesión</h2>
            <input type="email" placeholder="Correo Electrónico" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
            />
            <label className="checkbox">
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              /> Mostrar contraseña
            </label>
            <button className="primary-btn" onClick={handleLoginOrRegister}>
              INICIAR SESIÓN
            </button>
          </div>
          <div className="right">
            <p>Aún no tienes una cuenta?<br />Solicita tu registro aquí</p>
            <button className="primary-btn" onClick={() => setShowRegister(true)}>
              INICIAR REGISTRO
            </button>
          </div>
        </div>
      ) : (
        <div className="register-container">
          <div className="left">
            <p>Regresar al inicio</p>
            <h2>Ya tienes una cuenta?</h2>
            <p>Es necesario iniciar sesión para realizar una solicitud</p>
            <button className="primary-btn" onClick={() => setShowRegister(false)}>
              INICIAR SESIÓN
            </button>
          </div>
          <div className="right">
            <p>Para registrarte debes rellenar el formulario a continuación</p>
            <input type="email" placeholder="Ingrese su correo" />
            <input type="text" placeholder="Ingrese su nombre" />
            <input type="text" placeholder="Lorem ipsum dolor" />
            <input type="text" placeholder="Lorem ipsum dolor" />
            <input type="text" placeholder="Lorem ipsum dolor" />
            <input type="text" placeholder="Lorem ipsum dolor" />
            <button className="primary-btn" onClick={handleLoginOrRegister}>
              REGISTRAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
