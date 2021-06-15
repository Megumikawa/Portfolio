import React from 'react';
import Kittchat from '../components/Kittchat';
import Animeek from '../components/Animeek';
import Coingame from '../components/Coingame';
import Feuille from '../components/Feuille';
import ProjectsBackground from '../components/Background/ProjectsBackground';


function Projects() {
  return (
    <div id="projects">
      <ProjectsBackground />
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <Kittchat />
        <Animeek />
        <Coingame />
        <Feuille />
      </div>
    </div>
  )
}
export default Projects;
