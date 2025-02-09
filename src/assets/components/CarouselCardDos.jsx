import React from "react";
import "./CarouselInfinitoDos.scss";

const CarouselCardDos = ({ icon, location, title }) => {
  return (
    <div
      className="carousel-card"
      style={{ backgroundImage: `url(${icon})` }}>
      <div className="text-container">
        <p className="carousel-title">{title}</p>
        <p className="carousel-location">
          <img src="/carousel_dos/location.png" alt="ubicación" />
          {location}</p>

      </div>
    </div>
  );
};

export default CarouselCardDos;
