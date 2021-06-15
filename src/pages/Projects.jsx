import React from 'react';
import Kittchat from '../components/Kittchat';
import AnimeekProject from '../components/AnimeekProject';
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
        <AnimeekProject />
        <Coingame />
        <Feuille />
      </div>
    </div>
  )
}
export default Projects;
