import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div>
          <h5>Nuestra Empresa</h5>
          <a href="#">Quiénes Somos</a>
        </div>
        <div>
          <h5>Nuestras Redes</h5>
          <ul>
            <li>
              <a href="">
                <img src="#" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src=".." alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Información</h5>
          <ul>
            <li>
              <a href="#">Aerolíneas</a>
            </li>
            <li>
              <a href="#">Privacidad</a>
            </li>
            <li>
              <a href="#">Términos y Condiciones</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Soporte</h5>
          <a href="#">Ayuda</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
