import React from "react";
import "./CardBraileSection.scss"

const Card = ({ icon, title, description, specialTitle }) => {
    return (<div className="card-braile">
        <img src={icon} alt="Tienda online" className="card-braile__icon" />
        <h3 className={`card-braile__title ${specialTitle ? "special-title" : ""}`}>{title}</h3>
        <p className="card-braile__description">{description}</p>
    </div>
    )

}

export default Card;