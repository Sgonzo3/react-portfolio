import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Santos Gonzalez</h1>
      </header>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#featured-projects">Featured</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#other-projects">Misc.</a></li>
          <li><a href="#about-me">About Me</a></li>
        </ul>
      </nav>
      <main>
        <section id="featured-projects" className="featured-projects">
          <h2>Featured Projects</h2>
        </section>
        <section id="events" className="events">
          <h2>Events</h2>
        </section>
        <section id="other-projects" className="other-projects">
          <h2>Misc. Projects</h2>
        </section>
        <section id="about-me" className="about-me">
          <h2>About Me</h2>
        </section>
      </main>
      <footer className="footer">
        <h2>Around The Web</h2>
        <ul className="profile-links">
          <li><a href="https://www.freecodecamp.org/sgonzo3">freeCodeCamp</a></li>
          <li><a href="https://github.com/Sgonzo3">Github</a></li>
          <li><a href="https://www.linkedin.com/in/sgonzo3/">LinkedIn</a></li>
        </ul>
        <p>Made by <a href="https://sgonzo3.github.io/">Santos Gonzalez</a></p>
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
