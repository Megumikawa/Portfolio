import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Carousel from 'react-bootstrap/Carousel'

function KittchatProject() {
  return (
    <>
      <section className="project-container">
        <div className="project-image">
          <a href="https://kittchat.herokuapp.com/"　rel="noreferrer" target="_blank">
            <Carousel fade interval={2000} controls={false} indicators={false}>
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
            </Carousel>
          </a>
        </div>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Kittchat</h2>
            <hr />
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
              <a href="https://kittchat.herokuapp.com/" rel="noreferrer" target="_blank"><LanguageIcon />Checkout</a>
              <a href="https://github.com/LuisaEgoavil/Kittchat-client" rel="noreferrer" target="_blank"><GitHubIcon />Repository(client)</a>
              <a href="https://github.com/LuisaEgoavil/Kittchat-server" rel="noreferrer" target="_blank"><GitHubIcon />Repository(server)</a>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

export default KittchatProject;
