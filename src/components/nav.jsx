import React from "react";

const Nav = () => {
  return (
    <nav data-testid="nav" className="nav-m">
      <ul>
        <li><a href="#inicio">🏠Inicio</a></li>
        <li><a href="#productos">🍜Productos</a></li>
        <li><a href="#contacto">💬Contactos</a></li>
        <li><a href="#carrito"> 🛒Carrito</a></li>
      </ul>   
    </nav>
  );
};

export default Nav;
