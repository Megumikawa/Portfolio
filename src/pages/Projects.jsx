import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <section className="project-container">
        <a href="https://kittchat.herokuapp.com/">
          <img className="project-images" src="images/kittchat-mockup.png" alt="kittchat-image" />
        </a>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Kittchat</h2>
            <p className="project-description">
              A detail description of this project is comming here!!!!
            </p>
            <div className="project-skills">
              <span>#JavaScript</span>
            </div>
            <div className="project-link">
              <a href="https://kittchat.herokuapp.com/"><LanguageIcon />Web site</a>
              <a href="https://github.com/LuisaEgoavil/Kittchat-client"><GitHubIcon />Repository(client)</a>
              <a href="https://github.com/LuisaEgoavil/Kittchat-server"><GitHubIcon />Repository(server)</a>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="project-container">
        <a href="https://animeek.herokuapp.com/">
          <img className="project-images" src="images/animeek-mockup.png" alt="animeek-image" />
        </a>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Animeek</h2>
            <p className="project-description">
              A detail description of this project is comming here!!!!
            </p>
            <div className="project-link">
              <a href="https://animeek.herokuapp.com/"><LanguageIcon />Web site</a>
              <a href="https://github.com/LuisaEgoavil/animeek"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="project-container">
        <a href="https://megumikawa.github.io/coin-collector-game/">
          <img className="project-images" src="images/coincollecter1.png" alt="coincollecter-image" />
        </a>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Coin Collector</h2>
            <p className="project-description">
              A detail description of this project is comming here!!!!
            </p>
            <div className="project-link">
              <a href="https://megumikawa.github.io/coin-collector-game/"><LanguageIcon />Web site</a>
              <a href="https://github.com/Megumikawa/coin-collector-game"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="project-container">
        <a href="https://megumikawa.github.io/manabito-feuille/">
          <img className="project-images" src="images/feuille1.png" alt="feuille-image" />
        </a>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">feuille</h2>
            <p className="project-description">
              A detail description of this project is comming here!!!!
            </p>
            <div className="project-link">
              <a href="https://megumikawa.github.io/manabito-feuille/"><LanguageIcon />Web site</a>
              <a href="https://github.com/Megumikawa/manabito-practice/tree/feature/feuille/feuille"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card>
      </section>
      
    </>
  )
}
export default Projects;

