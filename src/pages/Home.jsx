import React from 'react'
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
    <div className="background" />
      {/* <img className="myPhoto" src="images/myillust.png" alt="myPhoto" /> */}
      <section className=" background-inner home">
      <h1>Hello!<br /> I am Megumi Kawagoe.</h1>
      <Typewriter
        options={{
          strings: ["Front-end Developer", "MERN Developer", "Learner"],
          autoStart: true,
          loop: true,
          delay: 50
        }}
      />
      </section>
    </>
  )
}

export default Home;
