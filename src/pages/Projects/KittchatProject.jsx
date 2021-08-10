import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Carousel from 'react-bootstrap/Carousel';
import { Trans } from 'react-i18next';

function KittchatProject() {
  return (
    <>
      <section className="project-container">
        <div className="project-image">
          <a href="https://kittchat.herokuapp.com/"　rel="noreferrer" target="_blank">
            <img className="d-block project-images" src="images/kittchat1.png" alt="kittchat-image" />
          </a>
        </div>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Kittchat</h2>
            <hr />
            <p className="project-description">
              <Trans i18nKey="project_kittchat.description">
              Kitchat is a cat cafe website that makes a reservation by choosing from 5 different locations in Berlin.<br/>
              Once you sign up, you can manage and check reservation history from your personal account.
              </Trans>
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
