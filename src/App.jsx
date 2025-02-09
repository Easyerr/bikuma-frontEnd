import React from "react";
import Header from "./assets/components/Header";
import AccessibilitySection from "./assets/components/ContactaConNotorosUno"
import CardSection from "./assets/components/CardBraileSection";
import CarouselInfinitoUno from "./assets/components/CarouselInfinitoUno";
import Servicios from "./assets/components/Servicios"
import ContactaConNosotrosDos from "./assets/components/ContactaConNosotrosDos";
import Productos from "./assets/components/Productos";
import CarouselInfinitoDos from "./assets/components/CarouselInfinitoDos"
import PartnersLogos from "./assets/components/PartnersLogos";
import Footer from "./assets/components/Footer";
function App() {
  
  return (
    <>
      <div>
        <Header />
        <AccessibilitySection/>
        <CardSection/>
        <CarouselInfinitoUno/>
        <Servicios />
        <ContactaConNosotrosDos/>
        <Productos/>
        <CarouselInfinitoDos/>
        <PartnersLogos/>
        <Footer/>


      </div>
    
    </>
  )
}

export default App
