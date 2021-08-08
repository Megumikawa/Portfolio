import React from 'react'
import Typewriter from "typewriter-effect";
import Background from '../components/Background/Background'
import { useTranslation } from 'react-i18next';


function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div id="home">
      <Background />
      <section className="home">
        <h1>Hi I'm<br />
          <span className="name">Megumi Kawagoe</span>
        </h1>
        <p style={{fontSize:'50px'}}>
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
