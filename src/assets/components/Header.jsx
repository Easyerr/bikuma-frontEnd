import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src="/20 años puntoDis.png" alt="Logo de PuntoDis - 20 años" className="header__logo" />


      <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Administración pública</a></li>
          <li><a href="#">Conócenos</a></li>
          <li><a href="#">Actualidad</a></li>
        </ul>

        <div className="header__buttons">
          <button className="btn_contactar">Contactar</button>

          <button className="btn_tienda">
            <img src="/Iconos/shopping_cart.png" alt="comprar" className="btn_tienda__icon" />
            <span>Tienda</span>
          </button>

          <button className="btn_buscar">
            <img src="/Iconos/search.png" alt="Buscar" />
          </button>
        </div>
      </nav>
      <button className="header__menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
};

export default Header;
