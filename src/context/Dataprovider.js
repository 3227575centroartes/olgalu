import React, { useState, useEffect, createContext } from "react";
import Data from '../Data.js';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el inicio de sesión

    useEffect(() => {
        const producto = Data.items;
        if (producto) {
            setProductos(producto);
        } else {
            setProductos([]);
        }
    }, []);

    useEffect(() => {
        const carritoData = JSON.parse(localStorage.getItem('carrito'));
        if (carritoData) {
            setCarrito(carritoData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const addCarrito = (id) => { 
        const existingItem = carrito.find(item => item.id === id);
        if (existingItem) {
            const updatedCarrito = carrito.map(item =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setCarrito(updatedCarrito);
        } else {
            const data = productos.find(producto => producto.id === id);
            setCarrito([...carrito, { ...data, cantidad: 1 }]);
        }
    };

    const removeItem = (id) => {
        const updatedCarrito = carrito.filter(item => item.id !== id);
        setCarrito(updatedCarrito);
    };

    const login = () => {
        // Lógica para iniciar sesión
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Lógica para cerrar sesión
        setIsLoggedIn(false);
    };

    const toogleMenu = () => {
        // Lógica para abrir o cerrar el menú
        setMenu(!menu);
    };

    const value = {
        productos: productos,
        menu: menu,
        setMenu: setMenu,
        addCarrito: addCarrito,
        carrito: carrito,
        removeItem: removeItem,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        toogleMenu: toogleMenu // Agrega la función toogleMenu al objeto de valor
    };

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};
