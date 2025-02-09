import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <img
            src="/Logos/PuntoDis copia.png"
            alt="Logo"
            className="footer__logo"
          />
          <p>
            Actualiza con nosotros tu proyecto con accesibilidad en la
            información y lleva tu mensaje a todas las personas.
          </p>
          <button className="footer__contact-button">
            Contactar
            <span className="material-icons">arrow_forward</span>
          </button>
          <img
            src="/Logos/AENOR copia.png"
            className="footer__aenor-iqnet"
          ></img>
        </div>

        <div className="footer__center">
          <nav className="footer__nav">
            <a href="#">Productos</a>
            <a href="#">Servicios</a>
            <a href="#">Administración pública</a>
            <a href="#">Conócenos</a>
            <a href="#">Actualidad</a>
            <a href="#">Tienda</a>
          </nav>
        </div>

        <div className="footer__right">
          <h3>
            ¿Quieres estar al día con las <br /> noticias de accesibilidad?
          </h3>
          <p>Suscríbete a la newsletter</p>
          <form className="footer__form">
            <input
              type="text"
              placeholder="Nombre"
              className="footer__form-name"
            />
            <input
              type="email"
              placeholder="Email"
              className="footer__form-email"
            />
            <label className="footer__form-checkbox">
              <input type="checkbox" />
              Acepto la política de privacidad
            </label>
            <button type="submit" className="footer__subscribe-button">
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <nav className="footer__legal">
          <p>© 2024 Puntodis</p>
          <a href="#">Políticas de privacidad</a>
          <a href="#">Aviso legal</a>
          <a href="#">Política de cookies</a>
        </nav>
        <div className="footer__social">
          <a href="#">
            <img src="/Logotipos redes sociales/X.png">
            </img>
          </a>
          <a href="#">
            <img src="/Logotipos redes sociales/Linkedin.png">
            </img>
          </a>
          <a href="#">
            <img src="/Logotipos redes sociales/Instagram.png">
            </img>
          </a>
          <a href="#">
            <img src="/Logotipos redes sociales/Youtube.png">
            </img>
          </a>
          <a href="#">
            <img src="/Logotipos redes sociales/Facebook.png">
            </img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
