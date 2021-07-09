import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Carousel from 'react-bootstrap/Carousel';
import { Trans, useTranslation } from 'react-i18next';

function CoingameProject() {
  return (
    <>
      <section className="project-container">
        <div className="project-image">
          <a href="https://megumikawa.github.io/coin-collector-game/" rel="noreferrer" target="_blank">
            <Carousel controls={false}>
              <Carousel.Item>
                <img className="d-block project-images" src="images/coincollector1.png" alt="coincollector-image" />
              </Carousel.Item>
            </Carousel>
          </a>
        </div>
        <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Coin Collector</h2><hr />
            <p className="project-description">
              <Trans i18nKey="project_coingame.description">
              Coin-Collector is a game about collecting two types of coins which fall from top to bottom.<br />
              An enemy of the devil is also coming from the right side to reduce your points.<br />
              When you cannot avoid rocks, the game is over.
              </Trans>
            </p>
            <div className="tech-skills">
              <span>#HTML5</span>
              <span>#CSS3</span>
              <span>#JavaScript</span>
              <span>#Canvas</span>
            </div>
            <div className="project-link">
              <a href="https://megumikawa.github.io/coin-collector-game/" rel="noreferrer" target="_blank"><LanguageIcon />Checkout</a>
              <a href="https://github.com/Megumikawa/coin-collector-game" rel="noreferrer" target="_blank"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
export default CoingameProject;
