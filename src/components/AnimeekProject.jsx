import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Carousel from 'react-bootstrap/Carousel'

function AnimeekProject() {
  return (
    <>
      <section className="project-container">
        <div className="project-image">
          <a href="https://animeek.herokuapp.com/" rel="noreferrer" target="_blank">
            <Carousel fade interval={1200} controls={false} indicators={false}>
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
        </div>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Animeek</h2><hr />
            <p className="project-description">
            Animeek is an app where you can search for your favorite anime and be able to add it to your watchlist. <br />
            You just type any anime you desire and Animeek will give you all the information you need.
            </p>
            <div className="tech-skills">
              <span>#Handlebars</span>
              <span>#MongoDB</span>
              <span>#Nodejs</span>
              <span>#Bootstrap</span>
            </div>
            <div className="project-link">
              <a href="https://animeek.herokuapp.com/" rel="noreferrer" target="_blank"><LanguageIcon />Checkout</a>
              <a href="https://github.com/LuisaEgoavil/animeek" rel="noreferrer" target="_blank"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card>
      </section>

    </>
  )
}
export default AnimeekProject;
