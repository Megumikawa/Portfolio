import React from 'react';
import KittchatProject from '../components/KittchatProject';
import AnimeekProject from '../components/AnimeekProject';
import CoingameProject from '../components/CoingameProject';
import FeuilleProject from '../components/FeuilleProject';
import ProjectsBackground from '../components/Background/ProjectsBackground';


function Projects() {
  return (
    <div id="projects">
      <ProjectsBackground />
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <KittchatProject />
        <AnimeekProject />
        <CoingameProject />
        <FeuilleProject />
      </div>
    </div>
  )
}
export default Projects;
