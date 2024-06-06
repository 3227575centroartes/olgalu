import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEnvelopeFill, BsLockFill } from 'react-icons/bs'; // Importar iconos de Bootstrap Icons
import { DataContext } from "../context/Dataprovider";
import usuariosRegistradosData from '../componentes/usuariosRegistrados.json';
import '../App.css';

const IniciarSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(DataContext); // Obtener la función de inicio de sesión del contexto

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar las credenciales del usuario
    const usuario = usuariosRegistradosData.find(user => user.email === email && user.password === password);
    if (usuario) {
      alert('Inicio de sesión exitoso');
      // Indicar que el usuario ha iniciado sesión
      login();
      // Redireccionar a la página principal
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="inicio-sesion-container">
      <h2>Iniciar Sesión</h2>
      <form className="inicio-sesion-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"><BsEnvelopeFill /> Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password"><BsLockFill /> Contraseña</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn-ingresar">Ingresar</button>
      </form>
    </div>
  );
};

export default IniciarSesion;
