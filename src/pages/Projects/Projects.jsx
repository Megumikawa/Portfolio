import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { particlesOptions } from "../../components/Background/ParticlesOptions";
import Particles from 'react-particles-js';
import './Projects.css';

function Projects() {
  return (
    <>
      {/* <ProjectsBackground /> */}

      <div id="projects" className="projects projects-background">
        <Particles className="particles" params={particlesOptions} />
        <div className="projects-outline">
        <h1>Projects</h1>
        <span className="card-container">
          <article className="card">
            <section className="card-header">
              <h2>Cat cafe booking app</h2>
              <span>
                <a href="https://github.com/LuisaEgoavil/Kittchat-client" target="_blank"><GitHubIcon /></a>
                <a href="https://kittchat.herokuapp.com/" target="_blank"><LaunchIcon /></a>
              </span>
            </section>
            <img className="d-block project-images" src="images/kittchat1.png" alt="kittchat-image" />
            <p>#React</p>
          </article>

          <article className="card">
            <section className="card-header">
              <h2>video data managing system</h2>
              <span>
                <a href="https://github.com/LuisaEgoavil/animeek" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                <a href="https://animeek.herokuapp.com/" rel="noreferrer" target="_blank"><LaunchIcon /></a>
              </span>
            </section>
            <img className="d-block project-images" src="images/animeek1.png" alt="animeek-image" />
            <p >#Node.js</p>
          </article>

          <article className="card">
            <section className="card-header">
              <h2>coin game</h2>
              <span>
                <a href="https://github.com/Megumikawa/coin-collector-game" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                <a href="https://megumikawa.github.io/coin-collector-game/" rel="noreferrer" target="_blank"><LaunchIcon /></a>
              </span>
            </section>
            <img className="d-block project-images" src="images/coincollector1.png" alt="coincollector-image" />
            <p>#Canvas</p>
          </article>

          <article className="card">
            <section className="card-header">
              <h2>coin game</h2>
              <span>
                <a href="https://github.com/Megumikawa/cryptocurrency-price-tracker" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                <a href="https://cryptocurrency-price-searcher.herokuapp.com/" rel="noreferrer" target="_blank"><LaunchIcon /></a>
              </span>
            </section>
            <img className="d-block project-images" src="images/cypto.png" alt="cypto-image" />
            <p>#React</p>
          </article>

          <article className="card">
            <section className="card-header">
              <h2>Todo List</h2>
              <span>
                <a href="https://github.com/Megumikawa/todo-list" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                <a href="https://todo-list-react-app-practice.herokuapp.com/" rel="noreferrer" target="_blank"><LaunchIcon /></a>
              </span>
            </section>
            <img className="d-block project-images" src="images/todo.png" alt="todo-image" />
            <p>#JS</p>
          </article>

          <article className="card">
            <section className="card-header">
              <h2>EC Site</h2>
              <span>
                <a href="https://github.com/Megumikawa/manabito-practice/tree/feature/feuille/feuille" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                <a href="https://megumikawa.github.io/manabito-feuille/" rel="noreferrer" target="_blank"><LaunchIcon /></a>
              </span>
            </section>
            <img className="d-block project-images" src="images/feuille1.png" alt="kittchat-image" />
            <p>#Landing page</p>
          </article>
          </span>
          </div>
      </div>
    </>
  )
}
export default Projects;
