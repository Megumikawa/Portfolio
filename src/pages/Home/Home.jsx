import React from 'react';
import Typewriter from "typewriter-effect";
import Background from '../../components/Background/Background';
import { useTranslation } from 'react-i18next';
import './Home.css'
import Particles from 'react-particles-js';
import { particlesOptions } from "../../components/Background/ParticlesOptions";
import '../../components/Background/Background.css';


function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div id="home" >
      {/* <Background /> */}
      <section className="home background particles">
      {/* <Particles className="particles" params={particlesOptions} /> */}
        <h1>Hi I'm<br />
          <span className="name">Megumi Kawagoe</span>
        </h1>
        <p className="typewriter">
          <Typewriter
            options={{
              strings: ["Front-end Developer", "MERN Developer", "Learner", "Challenger"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </p>
      </section>
    </div>
  )
}
export default Home;
