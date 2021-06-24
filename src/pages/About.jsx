import React from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';
import { Trans, useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';

function About() {
  const { t, i18n } = useTranslation();

  return (
    <div id="about" className="about">
      <section className="about-article">
        <h1>{t('about.h1')}</h1>
        <p>{t('about.part1')}</p>
        <Trans i18nKey="about.part2">
        I started coding from HTML, CSS, jQuery and WordPress at <a href="https://manabito.biz/" rel="noreferrer" target="_blank">Manabito.co</a> in 2020.
          Through learning jQuery, I was eager to learn from fundamental to a wide range of JavaScript. 
          Then I decided to move into Europe and joined <a href="https://www.ironhack.com/en" rel="noreferrer" target="_blank">Ironhack</a> Fullstack Web Development Bootcamp in 2021.</Trans>
        <p>{t('about.part3')}</p>
        <p>{t('about.part4')}</p>
        <p>{t('about.part5')}</p>
      </section>
      <section className="about-link">
      <Scroll to="contact" smooth={true} ><a className="contact-me" href="#contact">more...</a></Scroll>
      </section>
      <Skills />
    </div>
  )
}
export default About;