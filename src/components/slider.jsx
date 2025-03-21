import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 3; // Número total de slides

  // Función para mostrar el siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  // Función para mostrar el slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Efecto para el cambio automático de slides
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(slideInterval);
  }, [currentSlide]); // Se reiniciará el intervalo cuando currentSlide cambie

  return (
    <section className="slider-section">
      <div className="container">
        <div className="slider">
          {/* Slides */}
          <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
            Slide 1 - Ofertas Especiales
          </div>
          <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
            Slide 2 - Nuevos Productos
          </div>
          <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
            Slide 3 - Colección de Temporada
          </div>

          {/* Controles de puntos */}
          <div className="slider-controls">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`slider-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>

          {/* Flechas de navegación */}
          <div className="slider-arrows">
            <div className="slider-arrow prev" onClick={prevSlide}>
              ❮
            </div>
            <div className="slider-arrow next" onClick={nextSlide}>
              ❯
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
