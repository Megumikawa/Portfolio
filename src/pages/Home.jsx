import React, { Suspense } from 'react'
import Typewriter from "typewriter-effect";
import Background from '../components/Background/Background'
import { useTranslation } from 'react-i18next';



function Home() {

  const { t, i18n } = useTranslation();

  return (
    <div id="home">
      <Background />
      <section className="home">
        <h1>{t('home_greeting')} <br /><span className="name">Megumi Kawagoe.</span></h1>
        <Typewriter
          options={{
            strings: ["Front-end Developer", "MERN Developer", "Learner"],
            autoStart: true,
            loop: true,
            delay: 50,
            fontSize: '90px'
          }}
        />
      </section>
    </div>
  )
}
export default Home;
