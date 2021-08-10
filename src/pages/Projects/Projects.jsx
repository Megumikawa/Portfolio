import React from 'react';
import KittchatProject from './KittchatProject';
import AnimeekProject from './AnimeekProject';
import CoingameProject from './CoingameProject';
import FeuilleProject from './FeuilleProject';
import ProjectsBackground from './ProjectsBackground';
import './Projects.css';

function Projects() {
  return (
    <>
      <ProjectsBackground />
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <KittchatProject />
        <AnimeekProject />
        <CoingameProject />
        <FeuilleProject />
      </div>
    </>
  )
}
export default Projects;
