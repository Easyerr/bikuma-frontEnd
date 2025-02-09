import React from "react";
import "./ContactaConNosotrosUno.scss";

const ContactaConNosotrosUno = () => {
    return (
        <section className="accessibility-section">
            <div className="accessibility-section__text">
                <h2 className="accessibility-section__title">
                    ¿Cumples con las normativas de accesibilidad universal?
                </h2>
                <p className="accessibility-section__subtitle">
                    Actualiza tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas
                </p>
                <button className="accessibility-section__contact">
                    Contacta con nosotros
                    <span className="material-icons">arrow_forward</span>
                </button>
            </div>
            <div className="accessibility-section__img">
                <img src="/Imagenes/accesibilidad_universal.png" alt="Accesibilidad" />
            </div>
        </section>
    )
}

export default ContactaConNosotrosUno