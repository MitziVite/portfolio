import './App.css';
import Navbar from './components/Navbar';
import ParticlesComponent from './components/particles';
import TagCloudComponent from './components/TagCloud';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">

      <Navbar />
      <ParticlesComponent/>

      
      <div className="content">
        <div className="centered-text">
          <h1>
            Hello. I am <span className="highlighted-name">Mitzi Vite</span>,
          </h1>
          <p>I am a Full-Stack Web Developer</p>
        </div>
        <div className="presentation-container">
          <Presentation />
          <TagCloudComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
