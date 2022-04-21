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
      <section className="about-article">
          <h1>About</h1>
        <p>{t('about.introduction')}</p>
        <p>{t('about.development1')} {t('about.development2')} <br /> {t('about.development3')}</p>
        <p>{t('about.twist1')} <br />{t('about.twist2')}</p>
        <p>Checkout my <a href="https://drive.google.com/file/d/1QcUJSITsgUa02a-rZpDoAV_zGX9H2lXr/view?usp=sharing" target="_blank">Resume</a>, my <a href="https://github.com/Megumikawa" target="_blank">Github</a>, or let's chat on <a href="https://www.linkedin.com/in/megumi-kawagoe-88j/" target="_blank">Linkedin</a></p>
      </section>
      <section className="about-link">
      <Scroll to="contact" smooth={true} ><a className="contact-me" href="#contact">Contact</a></Scroll>
      </section>
      {/* <Skills /> */}
    </div>
  )
}
export default About;