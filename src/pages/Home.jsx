import React from 'react'
import Typewriter from "typewriter-effect";
import Background from '../components/Background'

function Home() {
  return (
    <>
    <Background />
      {/* <img className="myPhoto" src="images/myillust.png" alt="myPhoto" /> */}
      <section className="background-inner home">
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
    </>
  )
}

export default Home;
