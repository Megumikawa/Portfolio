import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Carousel from 'react-bootstrap/Carousel'

function Feuille() {
  return (
    <div>
      <section className="project-container">
        <div className="project-image">
          <a href="https://megumikawa.github.io/manabito-feuille/" rel="noreferrer" target="_blank">
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
        </div>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">feuille</h2><hr />
            <p className="project-description">
            This is a jewelry E-commercethe website landing page.<br />
            You can check the item detail when you click an image and when you scroll down, you can check shop detail with Google Maps.
            </p>
            <div className="tech-skills">
              <span>#HTML5</span>
              <span>#CSS3</span>
              <span>#jQuery</span>
              <span>#Responsive</span>
            </div>
            <div className="project-link">
              <a href="https://megumikawa.github.io/manabito-feuille/"><LanguageIcon />Checkout</a>
              <a href="https://github.com/Megumikawa/manabito-practice/tree/feature/feuille/feuille"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Feuille;
