import React from 'react';
import './About.css';
import minhaFoto from '../assets/smiling-businesswoman-working-laptop.jpg';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="container">
        <div className="about-text">
          <h1>
            Dê vida ao seu portfólio com <span>design e código</span>
          </h1>
          <p>
            Oi! Eu sou Rayanne, uma desenvolvedora e designer apaixonada por transformar ideias em
            experiências digitais incríveis.
          </p>
          <div className="about-buttons">
            <a href="#contact" className="btn-primary">Vamos conversar</a>
            <a href="#projects" className="btn-secondary">Ver projetos</a>
          </div>
        </div>
        <div className="about-image">
          <img src={minhaFoto} alt="Rayanne sorrindo" />
        </div>
      </div>
    </section>
  );
};

export default About;