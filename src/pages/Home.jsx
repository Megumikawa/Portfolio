import React from 'react'
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <h1>Hello!<br /> I am Megumi Kawagoe.</h1>
      <Typewriter
        options={{
          strings: ["Front-end Developer", "MERN Developer", "Learner"],
          autoStart: true,
          loop: true,
          delay: 50
        }}
      />
    </>
  )
}

export default Home;
