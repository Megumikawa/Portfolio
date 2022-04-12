import React from 'react';
import KittchatProject from './KittchatProject';
import AnimeekProject from './AnimeekProject';
import CoingameProject from './CoingameProject';
import FeuilleProject from './FeuilleProject';
import CyptoProject from './CyptoProject';
import TodoProject from './TodoProject';
import ProjectsBackground from './ProjectsBackground';
import './Projects.css';

function Projects() {
  return (
    <>
      <ProjectsBackground />
      <div id="projects" className="projects">
        <h1>Projects</h1>
          <div className="projects-outline">
          <KittchatProject />
          <AnimeekProject />
          <CoingameProject />
          <CyptoProject />
          <TodoProject />
          <FeuilleProject />
        </div>
      </div>
    </>
  )
}
export default Projects;
