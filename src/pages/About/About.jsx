import React from 'react';
// import { Link } from 'react-router-dom';
import Skills from '../Skills/Skills';
import { useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';
// import { aboutImage } from '../images/myillust.png'
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="about">
      <h1>About</h1>
      <section className="about-container">
        <article className="about-article">
          <p>{t('about.introduction')}</p>
          <p>
            {t('about.development1')} <br />
            {t('about.development2')} 
            {t('about.development3')}
          </p>
          <p>
            {t('about.twist1')} <br />
            {t('about.twist2')}
            </p>
          <p>Checkout my <a href="https://drive.google.com/file/d/1QcUJSITsgUa02a-rZpDoAV_zGX9H2lXr/view?usp=sharing" target="_blank">Resume</a>, my <a href="https://github.com/Megumikawa" target="_blank">Github</a>, or let's chat on <a href="https://www.linkedin.com/in/megumi-kawagoe-88j/" target="_blank">Linkedin</a></p>
        </article>
        <img src="images/myanime.png" className="about-image" alt="myillust" />

      <section className="about-skills">
      <h2>Skills</h2><hr />
        <div className="skill-container">
          <ul className="skill-topic">
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Typescript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>APIs</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
            <li>WordPress</li>
            <li>jQuery</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        </section>
        </section>
      {/* <Skills /> */}
      {/* <section className="about-link"> */}
      {/* <Scroll to="contact" smooth={true} ><a className="contact-me" href="#contact">Contact</a></Scroll> */}
      {/* </section> */}
      
    </div>
  )
}
export default About;