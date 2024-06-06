
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';
import '../../styles/header.css'; // Importa tus estilos CSS

export const Header = () => {
  const { isLoggedIn, logout, carrito, toggleMenu } = useContext(DataContext); // Corregí 'toogleMenu' a 'toggleMenu'

  return (
    <header className="header">
      <Link to="/productos" className="logo-link">
        <div className="logo-container">
          <img src={Nike} alt="logo" className="logo-img" />
        </div>
      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li>
          <Link to="/registro" className="nav-link">Registrarse</Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/iniciar-sesion" className="nav-link">Iniciar Sesión</Link>
          </li>
        )}
        <li>
          <Link to="/productos" className="nav-link">Productos</Link>
        </li>
        {isLoggedIn && (
          <li>
            <button className="logout-btn" onClick={logout}>Cerrar Sesión</button>
          </li>
        )}
      </ul>
      <div className="cart" onClick={toggleMenu}>
        <box-icon name="cart" aria-label="Carrito de compras"></box-icon>
        <span className="item-total">{carrito.length}</span>
      </div>
    </header>
  );
};
