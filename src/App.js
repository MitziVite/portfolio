import './App.css';
import Navbar from './components/Navbar';
import ParticlesComponent from './components/particles';
import TagCloudComponent from './components/TagCloud';
import Presentation from './components/Presentation';
import ProjectsGallery from "./components/Gallery";
import Contact from "./components/Contact";
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Home Section */}
      
        <ParticlesComponent />
        <Sidenav />
        <section id="home" className="content">
        <div className="centered-text">
          <h1>
            Hello. I am <span className="highlighted-name">Mitzi Vite</span>,
          </h1>
          <p>I am a Full-Stack Web Developer</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="presentation-container">
        <div className="presentation-left">
          <Presentation />
        </div>
        <div className="presentation-right">
          <TagCloudComponent />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="gallery-grid">
        <ProjectsGallery />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-container">
        <Contact />
      </section>
    </div>
  );
}

export default App;
