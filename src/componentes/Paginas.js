import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Inicio } from './Inicio';
import { ProductosLista } from './Productos/index';
import Registro from './Registro'; // Importa el componente Registro aquí
import IniciarSesion from './IniciarSesion'; // Importa el componente IniciarSesion aquí

export const Paginas = () => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li>
            <Link to="/iniciar-sesion">Iniciar Sesión</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductosLista />} />
        <Route path="/registro" element={<Registro />} /> {/* Agrega la ruta para Registro */}
        <Route path="/iniciar-sesion" element={<IniciarSesion />} /> {/* Agrega la ruta para IniciarSesion */}
      </Routes>
    </section>
  );
};