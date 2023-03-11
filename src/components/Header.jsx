import React from "react";
import Nav from "./nav";

const Header = () => {
  return (
    <header>
      <img  class="logo" src="logo.png" alt="Logo de la tienda" />    
       <Nav></Nav>
       
    </header>
  );
};

export default Header;
