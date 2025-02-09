import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "./CarouselInfinitoUno.scss";
import { Mousewheel, Autoplay } from "swiper/modules"; // Asegúrate de importar Autoplay
import CarouselCardUno from "./CarouselCardUno";

const items = [
  {
    icon: "/carousel_uno/Manual_de_seinalizacion.png",
    category: "Señalética",
    title: "Manual de señalización accesible para un mundo más inclusivo"
  },
  {
    icon: "/carousel_uno/plano_de_fitur.png",
    category: "Turismo",
    title: "¿Tienes cita en Fitur? La accesibilidad estará en tu agenda"
  },
  {
    icon: "/carousel_uno/stan_de_puntodis_en_fitur.jpeg",
    category: "Turismo",
    title: "¿Tienes cita en Fitur? La accesibilidad estará en tu agenda"
  },
  {
    icon: "/carousel_uno/Piensa_en_mas_accesibilidad.png",
    category: "Análisis",
    title: "Piensa en más accesibilidad para personas con Asperger"
  },
  {
    icon: "/carousel_uno/Polideportivos_con_accesibilidad.jpeg",
    category: "Proyecto",
    title: "Polideportivos con accesibilidad en Bilbao Kirolak"
  }
];

const CarouselInfinitoUno = () => {
  return (
    <div className="carousel-container">
      <h1>Conoce las últimas novedades<br /> de Puntodis</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        mousewheel={true}
        modules={[Mousewheel, Autoplay]}
        breakpoints={{
          1200: { slidesPerView: 3.5 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1.5 },
          320: { slidesPerView: 1 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <CarouselCardUno icon={item.icon} category={item.category} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselInfinitoUno;


