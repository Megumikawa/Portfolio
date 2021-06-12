import React from 'react';
import Kittchat from '../components/Kittchat';
import Animeek from '../components/Animeek';
import Coingame from '../components/Coingame';
import Feuille from '../components/Feuille';
import Background from '../components/Background';


function ProjectsTest() {
  return (
    <>
      <Background />
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
export default ProjectsTest;
