import React from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';

function About() {

  return (
    <div id="about">
      <h1>ABOUT</h1>
      <p>Hi There! I am Megumi Kawagoe based in Amsterdam, Netherlands.</p>
      <p>I'm a passionate Frontend developer, born and brought up in Japan.</p>
      <p>I started coding from HTML, CSS, jQuery and WordPress at <a href="https://manabito.biz/">Manabito.co</a> in 2020.
        Through learning jQuery, I was eager to learn from fundamental to a wide range of JavaScript. 
        Then I decided to move into Europe and joined <a href="https://www.ironhack.com/en">Ironhack</a> Fullstack Web Development Bootcamp in 2021.</p>
      <p>I like working with a team, especially those who have different backgrounds. 
        So every moment of experiences at Bootcamp was fun, intense and very stimulating.</p>
      {/* <p>Because I always put myself to step out of my comfort zone, being passionate about web design and JavaScript and my diligence of learning new skills are never ending.</p> */}
      <div>
        <Link className="text-blue contact-me" to="/contact">Let's Talk</Link>
      </div>

      <Skills />
      <h1>Hobbies</h1>
      <ul>
        <li>Traveling</li>
        <li>Yoga</li>
        <li>Video EditingVideo Editing</li>
        <li>Handicraft</li>
        <li>Japanese calligraphy</li>
      </ul>
    </div>
  )
}
export default About;