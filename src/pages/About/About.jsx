import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';
import { Trans } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="about">
      <h1>{t('header.about')}</h1>
      <section className="about-container">
        <article className="about-article">
          <p>
            {t('about.introduction1')}
          </p>
          <p>{t('about.introduction2')}</p>
          <p>
            {t('about.development1')} <br />
            {t('about.development2')} 
          </p>
          <p>
            {t('about.twist1')} <br />
            {t('about.twist2')}
            </p>
          {/* <p>Checkout my <a href="https://drive.google.com/file/d/1QcUJSITsgUa02a-rZpDoAV_zGX9H2lXr/view?usp=sharing" target="_blank">Resume</a>, my <a href="https://github.com/Megumikawa" target="_blank">Github</a>, or let's chat on <a href="https://www.linkedin.com/in/megumi-kawagoe-88j/" target="_blank">Linkedin</a></p><br/> */}
          <p><Trans>{t('about.conclusionPart.part1')} <a href="https://drive.google.com/file/d/1QcUJSITsgUa02a-rZpDoAV_zGX9H2lXr/view?usp=sharing" target="_blank">Resume</a> {t('about.conclusionPart.part2')}<a href="https://github.com/Megumikawa" target="_blank">Github</a> {t('about.conclusionPart.part3')}<a href="https://www.linkedin.com/in/megumi-kawagoe-88j/" target="_blank">Linkedin</a>{t('about.conclusionPart.part4')}</Trans></p>
        </article>
        <img src="images/myanime.png" className="about-image" alt="myillust" />

        </section>
      {/* <Skills /> */}
      {/* <section className="about-link"> */}
      {/* <Scroll to="contact" smooth={true} ><a className="contact-me" href="#contact">Contact</a></Scroll> */}
      {/* </section> */}
      
    </div>
  )
}
export default About;