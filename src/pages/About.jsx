import React from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';

function About() {

  return (
    <div id="about" className="about">
      <h1>ABOUT</h1>
      <p>Hello! I am Megumi Kawagoe based in Amsterdam, Netherlands.</p>
      <p>I'm a passionate Frontend developer, born and brought up in Japan.<br />
        I started coding from HTML, CSS, jQuery and WordPress at <a href="https://manabito.biz/">Manabito.co</a> in 2020.
        Through learning jQuery, I was eager to learn from fundamental to a wide range of JavaScript. 
        Then I decided to move into Europe and joined <a href="https://www.ironhack.com/en">Ironhack</a> Fullstack Web Development Bootcamp in 2021.
      </p>
      <p>Since my developer career started, I’ve been obsessed with styling and JavaScript and JS frameworks, and passionate organising the code structures and problem solving.</p>
      <p>Talking about personality, I’ve lived in different countries and worked at different types of companies and I enjoyed developing social, technical skills and communicating. 
          My time abroad has taught me to be a true team player and adaptive with those who have different backgrounds.
      </p>
      <p>I love traveling, learning new languages and doing handicraft. <br />
      Interestingly, my first solo trip was when I was 11 years old to join a summer school in Australia. Since then I have traveled to more than 20 countries. 
      </p>
      <div>
        <Link className="text-blue contact-me" to="/contact">Let's Talk</Link>
      </div>

      <Skills />
    </div>
  )
}
export default About;