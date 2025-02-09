import React from "react";
import "./PartnersLogos.scss";

const PartnersLogos = () => {
  const logos = [
    "/Logos/Bizkaia Diputacion copia.jpg",
    "/Logos/BBVA copia.jpg",
    "/Logos/ALSA copia.jpg",
    "/Logos/Bilbobus copia.jpg",
    "/Logos/Bizkaibus_logo2.jpg",
    "/Logos/vila_museu.jpg",

  ];

  return (
    <div className="partners-container">
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`Partner ${index + 1}`} className="partner-logo" />
      ))}
    </div>
  );
};

export default PartnersLogos;
