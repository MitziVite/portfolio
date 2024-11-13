import React, { useEffect } from "react";
import "./TagCloud.css";
import TagCloud from "TagCloud";

const TagCloudComponent = () => {
  useEffect(() => {
    // Verificar si ya existe la nube de etiquetas y limpiarla antes de reiniciarla
    const container = ".tagcloud";
    const containerElement = document.querySelector(container);
    if (containerElement) {
      containerElement.innerHTML = "";  // Limpiar el contenedor
    }

    // Detectar el tamaño de la pantalla y ajustar el radio de la esfera
    const screenWidth = window.innerWidth;
    const adjustedRadius = screenWidth < 768 ? 160 : 410; 

    const texts = [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "NodeJS",
      "Jquery",
      "Git",
      "GitHub",
      "PostgreSQL",
      "Python",
      "MongoDB",
      "C#",
      "PowerApps",
    ];

    const options = {
      radius: adjustedRadius, // Usar el radio ajustado según el tamaño de la pantalla
      maxSpeed: 0.75,
      initSpeed: "normal",
      keep: true,
    };

    // Inicializar la nube de etiquetas
    TagCloud(container, texts, options);

    // Limpiar cualquier efecto residual cuando el componente se desmonte
    return () => {
      if (containerElement) {
        containerElement.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TagCloudComponent;
