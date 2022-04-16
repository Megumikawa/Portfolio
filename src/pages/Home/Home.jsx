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
          <img style={{width: '25%', marginTop: '10%'}} src="images/myanime.png" alt="myillust" />
        </h1>
        <p className="typewriter">
          <Typewriter
            options={{
              strings: ["Frontend Developer", "MERN Developer", "Challenger", "Learner"],
              autoStart: true,
              loop: true,
              delay: 70
            }}
          />
        </p>
      </section>
    </div>
  )
}
export default Home;
