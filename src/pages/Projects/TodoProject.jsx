import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import Carousel from 'react-bootstrap/Carousel';
import { Trans } from 'react-i18next';

function TodoProject() {
  return (
    <>
      <section className="project-container">
        <div className="project-image">
          <a href="https://todo-list-react-app-practice.herokuapp.com/" rel="noreferrer" target="_blank">
            <img className="d-block project-images" src="images/todo.png" alt="todo-image" />
          </a>
        </div>
        {/* <Card className="my-project-card">
          <CardContent>
            <h2 className="project-title">Todo List</h2><hr />
            <p className="project-description">
              <Trans i18nKey="project_feuille.description">
                This is a jewelry E-commercethe website landing page.<br />
                You can check the item detail when you click an image and when you scroll down, you can check shop detail with Google Maps.
              </Trans>
            </p>
            <div className="tech-skills">
              <span>#JS</span>
              <span>#CSS3</span>
            </div>
            <div className="project-link">
              <a href="https://todo-list-react-app-practice.herokuapp.com/" rel="noreferrer" target="_blank"><LanguageIcon />Checkout</a>
              <a href="https://github.com/Megumikawa/todo-list" rel="noreferrer" target="_blank"><GitHubIcon />Repository</a>
            </div>
          </CardContent>
        </Card> */}
      </section>
    </>
  )
}

export default TodoProject;
