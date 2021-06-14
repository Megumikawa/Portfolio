import React from 'react';
import Kittchat from '../components/Kittchat';
import Animeek from '../components/Animeek';
import Coingame from '../components/Coingame';
import Feuille from '../components/Feuille';
import ProjectsBackground from '../components/Background/ProjectsBackground';


function Projects() {
  return (
    <>
      <ProjectsBackground />
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <Kittchat />
        <Animeek />
        <Coingame />
        <Feuille />
      </div>
    </>
  )
}
export default Projects;
