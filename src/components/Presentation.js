import '@fortawesome/fontawesome-free/css/all.min.css';
import './Presentation.css';

function Presentation() {
  return (
    <section id="about" className='presentation-container'>
      <div className='intro'>
        <h2>Who am I?</h2>
        <p>
          I’m studying Software Engineering at BYU-I. I am from Mexico City. I have a passion for designing and creating websites.
          <span className='working'> Let’s make a project together!</span>
        </p>
      </div>
    </section>
  );
}

export default Presentation;
