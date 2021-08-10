import React from 'react';
// import { Link } from 'react-router-dom';
import Skills from './Skills';
import { useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';
// import { aboutImage } from '../images/myillust.png'

function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="about">
      <section className="about-article">
          <h1>About</h1>
        <p>{t('about.part1')} {t('about.part2')}</p>
        <p>{t('about.part3')}</p>
        <p>{t('about.part4')}</p>
        <p>{t('about.part5')}</p>
      </section>
      <section className="about-link">
      <Scroll to="contact" smooth={true} ><a className="contact-me" href="#contact">more info</a></Scroll>
      </section>
      <Skills />
    </div>
  )
}
export default About;