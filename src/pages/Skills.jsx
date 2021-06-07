import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
        <div className="skill-container">
          <section className="skill-topic">
            <h2>Front End</h2>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>jQuery</li>
                <li>WordPress</li>
                <li>RESTAPI</li>
                <li>Bootstrap</li>
                <li>Material-UI</li>
                <li>Responsive Design</li>
              </ul>
            </section>
            <section className="skill-topic">
              <h2>BackEnd</h2>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PHP</li>
                </ul>
            </section>
            <section className="skill-topic">
            <h2>Version Control</h2>
              <ul>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </section>
        </div>
    </div>
  )
}
export default Skills;