import React from 'react';
import Typewriter from "typewriter-effect";
import Background from '../../components/Background/Background';
import { useTranslation } from 'react-i18next';
import './Home.css';



function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div id="home">
      <Background />
      <section className="home">
        <h1>Hello, I'm Megumi!<br />
          <img style={{width: '30%'}}src="images/myanime.png" alt="myillust" />
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
