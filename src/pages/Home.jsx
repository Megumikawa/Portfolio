import React from 'react'
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
    <section></section>
      {/* <img className="myPhoto" src="images/myillust.png" alt="myPhoto" /> */}
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
