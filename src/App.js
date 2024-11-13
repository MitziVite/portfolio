import './App.css';
import Navbar from './components/Navbar';
import ParticlesComponent from './components/particles';
import TagCloudComponent from './components/TagCloud';
import Presentation from './components/Presentation';
import ProjectsGallery from "./components/Gallery";

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="content">
      <ParticlesComponent/>
      
        <div className="centered-text">
          <h1>
            Hello. I am <span className="highlighted-name">Mitzi Vite</span>,
          </h1>
          <p>I am a Full-Stack Web Developer</p>
        </div>
        
      </div>
      <div className="presentation-container">
      <div className="presentation-left">
        <Presentation />
      </div>
      <div className="presentation-right">
        <TagCloudComponent />
      </div>
      </div>
      <div className='gallery-grid'>
      <ProjectsGallery />
      </div>
    </div>
  );
}

export default App;
