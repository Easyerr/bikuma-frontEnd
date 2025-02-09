import React from "react";

const CarouselCardUno = ({ icon, category, title }) => {
  return (
    <div
      className="carousel-card"
      style={{ backgroundImage: `url(${icon})` }}>
      <div className="text-container">
        <p className="carousel-category">{category}</p>
        <p className="carousel-title">{title}</p>

      </div>
    </div>
  );
};

export default CarouselCardUno;
