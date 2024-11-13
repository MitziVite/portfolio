import React from "react";
import "./ProjectGallery.css";
import videoCatalog from "../images/videoCatalog.png";
import Store from "../images/Store.png";
import Bountiful from "../images/Bountiful.png";
import Rexy from "../images/Rexy.png";
import CSEMotors from "../images/CSE Motors.png";
import Weather from "../images/Weather.png";
import MexicoCityMap from "../images/MexicoCityMap.png";
import Inspiro from "../images/Inspiro.png";

const ProjectsGallery = () => {
  return (
    <div id="portfolio" className="projects-gallery">
      <h1>My Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <a href="https://github.com/MitziVite/Hackathon-fall-2024" target="_blank" rel="noopener noreferrer">
            <img src={Rexy} alt="Project 2" />
          </a>
          <h3>Rexy's Voice</h3>
          <p>
            Rexy's Voice was developed for the Fall 2024 Hackathon to help BYU-I students rate and review their classes. Using <span className="tech-color">JavaScript</span>, <span className="tech-color">EJS</span>, <span className="tech-color">CSS</span>, and <span className="tech-color">HTML</span>, this platform allows students to share feedback and help others make informed decisions about their courses.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/narah10/Inspiro-Project" target="_blank" rel="noopener noreferrer">
            <img src={Inspiro} alt="Project 2" />
          </a>
          <h3>Inspiro</h3>
          <p>
            Inspiro is built with <span className="tech-color">Svelte</span>, <span className="tech-color">JavaScript</span>, <span className="tech-color">CSS</span>, <span className="tech-color">HTML</span>, and the <span className="tech-color">Unsplash API</span>. Powered by <span className="tech-color">Vite</span>, it allows users to search, save, and download their favorite images directly from Unsplash using a keyword-based search bar.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/MitziVite/VideoAndVisualCatalog" target="_blank" rel="noopener noreferrer">
            <img src={videoCatalog} alt="Project 2" />
          </a>
          <h3>Video and Visual Catalog</h3>
          <p>
            This project is a digital catalog created for BYU-I’s Arts and Online Learning departments, utilizing <span className="tech-color">Angular</span>, <span className="tech-color">TypeScript</span>, <span className="tech-color">Bootstrap</span>, and <span className="tech-color">Firebase</span>. It allows users to manage and explore multimedia content in a digital store-like interface.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/MitziVite/Store" target="_blank" rel="noopener noreferrer">
            <img src={Store} alt="Project 2" />
          </a>
          <h3>SIT Store</h3>
          <p>
            Developed for the Systems and Innovation Technology department at BYU-I, <span className="tech-color">SIT Store</span> is a simulated e-commerce platform using <span className="tech-color">Angular</span>, <span className="tech-color">TypeScript</span>, <span className="tech-color">Bootstrap</span>, and <span className="tech-color">Firebase</span> to manage products, user authentication, and transactions.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/MitziVite/wdd230" target="_blank" rel="noopener noreferrer">
            <img src={Bountiful} alt="Project 2" />
          </a>
          <h3>Bountiful Food</h3>
          <p>
            <span className="tech-color">Bountiful Food</span> uses <span className="tech-color">JavaScript</span>, <span className="tech-color">CSS</span>, <span className="tech-color">HTML</span>, and a weather API to offer information on farming conditions in Bountiful, Utah, with weather-based suggestions for optimal farming practices.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/MitziVite/cse340-vite" target="_blank" rel="noopener noreferrer">
            <img src={CSEMotors} alt="Project 2" />
          </a>
          <h3>CSE Motors</h3>
          <p>
            Built using <span className="tech-color">JavaScript</span>, <span className="tech-color">EJS</span>, and <span className="tech-color">CSS</span>, <span className="tech-color">CSE Motors</span> simulates a vehicle sales platform, allowing users to explore car models, prices, and make mock purchases.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/MitziVite/Weather-App-Project2" target="_blank" rel="noopener noreferrer">
            <img src={Weather} alt="Project 2" />
          </a>
          <h3>Weather App</h3>
          <p>
            <span className="tech-color">Weather App</span> leverages <span className="tech-color">Java</span>, <span className="tech-color">AWT</span>, and <span className="tech-color">API calls</span> to provide real-time weather data and forecasts through a graphical user interface (GUI), offering a functional and user-friendly experience.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/MitziVite/historical_parks_mexicocity" target="_blank" rel="noopener noreferrer">
            <img src={MexicoCityMap} alt="Project 2" />
          </a>
          <h3>Historical Places and Parks in Mexico City</h3>
          <p>
            Created using <span className="tech-color">JavaScript</span>, <span className="tech-color">HTML</span>, and the <span className="tech-color">Overpass API</span>, this project displays a map of historical sites and parks in Mexico City, integrating geospatial data for an interactive experience.
          </p>
        </div>
      </div>

      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
  );
};

export default ProjectsGallery;
