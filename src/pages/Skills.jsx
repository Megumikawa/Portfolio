import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h2>Skills</h2>
        <div className="skill-container">
          <section className="skill-topic">
            <h3>Front End</h3>
            <hr />
              <ul className="skills-frontend">
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
              <h3>BackEnd</h3>
              <hr />
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              <h3>Version Control</h3>
              <hr />
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