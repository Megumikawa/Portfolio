import React from 'react';
import KittchatProject from '../../components/KittchatProject';
import AnimeekProject from '../../components/AnimeekProject';
import CoingameProject from '../../components/CoingameProject';
import FeuilleProject from '../../components/FeuilleProject';
import ProjectsBackground from '../../components/Background/ProjectsBackground';
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
