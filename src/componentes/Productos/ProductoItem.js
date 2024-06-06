
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../../context/Dataprovider"; 

const ProductoItem = ({
    id,
    title,
    price,
    image,
    category
}) => {

  const value = useContext(DataContext)
  const addCarrito = value.addCarrito;

  return (
    <div className="producto">
      <a href="#">
        <div className="producto__img">
          <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </a>
      <div className="producto__footer">
        <h1 style={{ textAlign: 'center', color: '#000', fontSize: '2em' }}>{title}</h1>
        <p>{category}</p>
        <p className="price">{price}</p>
      </div>
      <div className="buttom">
        <button className="btn" onClick={() => addCarrito(id)}>Añadir al carrito</button>
        <div>
          <a href="#" className="btn">Vista</a>
        </div>
      </div>
    </div>
  );
};

export default ProductoItem;
