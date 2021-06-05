import React from 'react'
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Carousel from 'react-bootstrap/Carousel'

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>

{/* --------------------Kittchat-------------------- */}
      <section className="project-container">
        <a href="https://kittchat.herokuapp.com/">
          <Carousel fade interval={800} controls={false} indicators={false}>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat1.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat2.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat3.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat4.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat5.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat6.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat7.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat8.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat9.png" alt="kittchat-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block project-images" src="images/kittchat10.png" alt="kittchat-image" />
          </Carousel.Item>
        </Carousel>
        </a>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Kittchat</h2>
            <p className="project-description">
            Kitchat is a cat cafe website that makes a reservation by choosing from 5 different locations in Berlin.<br/>
            Once you sign up, you can manage and check reservation history from your personal account.
            </p>
            <div className="tech-skills">
              <span>#Reactjs</span>
              <span>#Nodejs</span>
              <span>#Express</span>
              <span>#MongoDB</span>
            </div>
            <div className="project-link">
              <a href="https://kittchat.herokuapp.com/"><LanguageIcon />Checkout</a>
              <a href="https://github.com/LuisaEgoavil/Kittchat-client"><GitHubIcon />Repository(client)</a>
              <a href="https://github.com/LuisaEgoavil/Kittchat-server"><GitHubIcon />Repository(server)</a>
            </div>
          </CardContent>
        </Card>
      </section>

{/* --------------------Animeek-------------------- */}
      <section className="project-container">
        <a href="https://animeek.herokuapp.com/">
          <Carousel fade interval={2000} controls={false} indicators={false}>
            <Carousel.Item>
              <img className="d-block project-images" src="images/animeek1.png" alt="animeek-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block project-images" src="images/animeek2.png" alt="animeek-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block project-images" src="images/animeek3.png" alt="animeek-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block project-images" src="images/animeek4.png" alt="animeek-image" />
            </Carousel.Item>
          </Carousel>
        </a>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Animeek</h2>
            <p className="project-description">
            Animeek is an app where you can search for your favorite Anime and be able to add it to your Watchlist. <br />
            You just type any anime you desire and Animeek will give you all the information you need.
            </p>
            <div className="tech-skills">
              <span>#Handlebars</span>
              <span>#MongoDB</span>
              <span>#Nodejs</span>
              <span>#Bootstrap</span>
            </div>
            <div className="project-link">
              <a href="https://animeek.herokuapp.com/"><LanguageIcon />Checkout</a>
              <a href="https://github.com/LuisaEgoavil/animeek"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card>
      </section>

{/* --------------------coin-collector-------------------- */}
      <section className="project-container">
        <a href="https://megumikawa.github.io/coin-collector-game/">
          <Carousel fade interval={2000} controls={false} indicators={false}>
            <Carousel.Item>
              <img className="d-block project-images" src="images/coincollecter1.png" alt="kittchat-image" />
            </Carousel.Item>
          </Carousel>
        </a>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Coin Collector</h2>
            <p className="project-description">
            Coin-Collector is a game about collecting two types of coins which fall from top to bottom.<br />
            An enemy of the devil is also coming from the right side to reduce your points.<br />
            When you cannot avoid rocks, the game is over.
            </p>
            <div className="tech-skills">
              <span>#HTML5</span>
              <span>#CSS3</span>
              <span>#JavaScript</span>
              <span>#Canvas</span>
            </div>
            <div className="project-link">
              <a href="https://megumikawa.github.io/coin-collector-game/"><LanguageIcon />Checkout</a>
              <a href="https://github.com/Megumikawa/coin-collector-game"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card>
      </section>

{/* --------------------feuille-------------------- */}
      <section className="project-container">
        <a href="https://megumikawa.github.io/manabito-feuille/">
          <Carousel fade interval={1200} controls={false} indicators={false}>
            <Carousel.Item>
              <img className="d-block project-images" src="images/feuille1.png" alt="kittchat-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block project-images" src="images/feuille2.png" alt="kittchat-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block project-images" src="images/feuille3.png" alt="kittchat-image" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block project-images" src="images/feuille4.png" alt="kittchat-image" />
            </Carousel.Item>
          </Carousel>
        </a>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">feuille</h2>
            <p className="project-description">
            This is the landing page of Feuille which is a jewelry E-commerce website.
            </p>
            <div className="project-link">
              <a href="https://megumikawa.github.io/manabito-feuille/"><LanguageIcon />Web site</a>
              <a href="https://github.com/Megumikawa/manabito-practice/tree/feature/feuille/feuille"><GitHubIcon />Repository</a>
            </div>
            <div className="tech-skills">
              <span>#HTML5</span>
              <span>#CSS3</span>
              <span>#jQuery</span>
              <span>#Responsive</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
export default Projects;



