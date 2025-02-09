import React from "react";


const Producto = ({ icon, title }) => {
    return (

        <div className="producto">

            <img src={icon} alt="abc" className="producto__icon" />
            <h3 className="producto__title">{title}</h3>
        </div>
    )
}
export default Producto;
