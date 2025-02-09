import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay, Mousewheel } from "swiper/modules";
import CarouselCardDos from "./CarouselCardDos";

const items = [
  {
    icon: "/carousel_dos/Manual_de_seinalizacion.png",
    title: "Manual de señalización accesible para un mundo más inclusivo",
    location: "Palma de Mallorca"
  },

  {
    icon: "/carousel_dos/La_estrategia_integral.jpg",
    title: "La estrategia integral para el fomento de la accesibilidad en bilbobus",
    location: "Bilbao"
  },

  {
    icon: "/carousel_dos/Alhondiga_bilbao.jpeg",
    title: "Alhóndiga bilbao - centro azkuna, pensando en la accesibilidad para todos",
    location: "Bilbao"
  },

  {
    icon: "/carousel_dos/Vilamuseu.jpeg",
    title: "Vilamuseu «museos para todos»",
    location: "Vila Joiosa"
  },

  {
    icon: "/carousel_dos/Getxo.jpg",
    title: "La accesibilidad en el turismo entra ya al siguiente nivel",
    location: "Getxo"
  },
];

const CarouselInfinitoDos = () => {
  return (

    <div className="carousel-container">
      <h1>Proyectos de accesibilidad<br />universal</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
            <CarouselCardDos icon={item.icon} title={item.title} location={item.location} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselInfinitoDos;