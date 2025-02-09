import React from "react";
import "./ContactaConNosotrosDos.scss";

const ContactaConNosotrosDos = () => {
    return (
        <section className="contact-section">
            <div className="contact-section__container">
                <div className="contact-section__img">
                    <img src="/Imagenes/persona_en_el_ordenador.png" alt="Contacta con nosotros" />
                </div>
                <div className="contact-section__text">
                    <h2 className="contact-section__title">
                        Somos consultores en Accesibilidad <br /> Universal
                    </h2>
                    <p className="contact-section__subtitle">
                        Nuestro objetivo es que todas las personas puedan desenvolverse en cualquier entorno con independencia y accedan a todos los recursos del mismo con facilidad.<br />Mira cómo podemos ayudarte a transformar tu proyecto, cumplir con las normativas y abrirlo a todas las personas.
                    </p>
                    <button className="contact-section__button">
                        Contacta con nosotros
                        <span className="material-icons">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactaConNosotrosDos;
