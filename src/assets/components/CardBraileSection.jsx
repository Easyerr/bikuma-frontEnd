import React from "react";
import CardBraile from "./CardBraile";
import "./CardBraileSection.scss"
const features = [
    {
        icon: "/braile/tienda_online.png",
        title: "Tienda online",
        description: "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida",
    },
    {
        icon: "/braile/administracion_publica.png",
        title: "Administración pública",
        description: "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida",
    },
    {
        icon: "/braile/fabricamos_a_medida.png",
        title: "Fabricamos a medida",
        description: "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida",
    },
    {
        icon: "/braile/digitalizacion_accesible.png",
        title: "Digitalización accesible",
        description: "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida",
    }
]

const CardSection = () => {
    return (
        <section className="features-section">
            {features.map((feature, index) => (
                <CardBraile key={index} {...feature} />
            ))}
        </section>
    )
}

export default CardSection