import React from "react";
import CardBraile from "./CardBraile";
import "./CardBraileSection.scss"
import "./Servicios.scss"

const features = [
    {
        icon: "/braile/accesibilidad_en_comunicacion.png",
        title: "Accesibilidad en comunicación",
        description: "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida",
    },
    {
        icon: "/braile/servicios_de_digitalizacion.png",
        title: "Servicios de digitalización",
        description: "Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget ",
    },
    {
        icon: "/braile/diagnosticos_y_planes_estrategicos.png",
        title: "Diagnósticos y planes estratégicos",
        description: "Aliquam vitae mauris non augue sollicitudin porttitorodio vehicula ",
    },
    {
        icon: "/braile/evacuacion_y_emergencia.png",
        title: "Evacuación y emergencia",
        description: "Donec et nibh facilisis, lobortis lacus non, viverra ante integer ",
    },
    {
        icon: "/braile/formacion_en_inclusion.png",
        title: "Formación en inclusión",
        description: "Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget ",
    },
    {
        icon: "/braile/restauracion_inclusiva.png",
        title: "Restauración inclusiva",
        description: "Donec et nibh facilisis, lobortis lacus non, viverra ante integer ",
    },
    {
        icon: "/braile/simulacion_de_entornos_3d.png",
        title: "Simulación de entornos 3D",
        description: "Donec et nibh facilisis, lobortis lacus non, viverra ante integer ",
    },

]

const Servicios = () => {
    return (
        <div className="servicios-container">
            <h1>Servicios</h1>
            <section className="features-section">
                {features.map((feature, index) => (
                    <CardBraile key={index} {...feature}
                        specialTitle={feature.title === "Diagnósticos y planes estratégicos"}
                    />
                ))}
            </section>
        </div>
    )
}

export default Servicios
