import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/Dataprovider';
import Card from '../../images/img08.jpg';

export const Carrito = () => {
    const { menu, setMenu, carrito, removeItem } = useContext(DataContext);
    const [cantidadProductos, setCantidadProductos] = useState({});

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + item.price, 0);
    };

    const aumentarCantidad = (id) => {
        setCantidadProductos({
            ...cantidadProductos,
            [id]: (cantidadProductos[id] || 0) + 1
        });
    };

    const disminuirCantidad = (id) => {
        if (cantidadProductos[id] > 0) {
            setCantidadProductos({
                ...cantidadProductos,
                [id]: cantidadProductos[id] - 1
            });
        }
    };

    const comprar = () => {
        // Aquí puedes implementar la lógica para finalizar la compra, por ejemplo, enviar el carrito a un servidor, etc.
        console.log("Compra realizada:", carrito);
        // Luego puedes limpiar el carrito
        setMenu(false); // Cerrar el carrito después de la compra
    };

    return (
        <div className={menu ? "carritos show" : "carritos"}>
            <div className={menu ? "carrito show" : "carrito"}>
                <div className="carrito__close" onClick={toggleMenu}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">
                    {carrito.map(item => (
                        <div key={item.id} className="carrito__item">
                            <img src={item.image} alt={item.title} />
                            <div className="carrito__details">
                                <h3>{item.title}</h3>
                                <p className="price">${item.price}</p>
                                <div className="cantidad">
                                    <button onClick={() => disminuirCantidad(item.id)}>-</button>
                                    <span>{cantidadProductos[item.id] || 0}</span>
                                    <button onClick={() => aumentarCantidad(item.id)}>+</button>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger">
                                    <i className="bi bi-trash"></i> Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>         
            </div>
        </div>
    );
};
