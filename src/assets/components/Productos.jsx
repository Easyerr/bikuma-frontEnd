import React from "react";
import Producto from "./Producto";
import "./Productos.scss"

const features = [
    {
        icon: "/Productos/ABC.jpg",
        title: "Señalización. Diseño, validación y fabricación",
    },
    {
        icon: "/Productos/planos.jpg",
        title: "Planos y cuadros tactovisuales",
    },
    {
        icon: "/Productos/Jazz Madrid copia.jpg",
        title: "Papelería, vinilos y etiquetas",
    },
    {
        icon: "/Productos/Pavimento.jpg",
        title: "Pavimento tactil",
    }
]

const Productos = () => {
    return (
        <section className="features-section">
            <h2 className="productos-section__title">Productos</h2>

            {features.map((feature, index) => (
                <Producto key={index} {...feature} />
            ))}
        </section>
    )
}
export default Productos