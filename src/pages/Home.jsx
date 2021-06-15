import React from 'react'
import Typewriter from "typewriter-effect";
import Background from '../components/Background/Background'

function Home() {
  return (
    <div id="home">
      <Background />
      <section className="home">
        <h1>Hi, I'm <br /><span className="name">Megumi Kawagoe.</span></h1>
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
