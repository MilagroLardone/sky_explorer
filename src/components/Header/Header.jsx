import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="header_logo">
          <img src="" alt="logo" className="header_icon" />
          <h1 className="header_title">Sky Explorer</h1>
        </div>
        <ul className="header_list">
          <li>
            <img src="#" alt="" />
            <a href="">Vuelos</a>
          </li>
          <li>
            <img src="#" alt="" />
            <a href="">Favoritos</a>
          </li>
          <li>
            <img src="#" alt="" />
            <a href="">Viajes</a>
          </li>
        </ul>
        <button></button>
        <button className="header_signIn">Iniciar Sesión</button>
      </div>
    </>
  );
};

export default Header;
