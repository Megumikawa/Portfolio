import React from 'react';
import Typewriter from "typewriter-effect";
import { particlesOptions } from "../../components/Background/ParticlesOptions";
import Particles from 'react-particles-js';
import { useTranslation } from 'react-i18next';
import './Home.css';




function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div id="home" className="background">
      <Particles className="particles" params={particlesOptions} />
      <section className="home">
        <h1>{t('header.homeTop')}<br />
          <img style={{width: '50%', marginTop: '4%'}} src="images/animeme.png" alt="myillust" />
        </h1>
        <p className="typewriter">
          <Typewriter
            options={{
              strings: ["Frontend Developer", "MERN Developer", "Deep Learner", "Challenger"],
              autoStart: true,
              loop: true,
              delay: 100,
              pauseFor: 2100
            }}
          />
        </p>
      </section>
    </div>
  )
}
export default Home;
