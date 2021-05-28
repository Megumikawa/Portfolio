import React from 'react'
import Typist from 'react-typist';

function Home() {
  return (
    <>
      <h1>Hello. I am Megumi Kawagoe.</h1>
      <Typist>Frontend developer</Typist>
      <Typist>
        <span> First Sentence </span>
          <Typist.Backspace count={8} delay={200} />
        <span> Phrase </span>
      </Typist>
    </>
  )
}

export default Home;