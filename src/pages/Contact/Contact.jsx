import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from 'react-bootstrap/Button';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <div id="contact" className="contact">
      <h1>{t('contact.sentence1')}</h1>
      <h2>{t('contact.sentence2')}</h2>
      <div className="contact-link">
        <a href="https://www.linkedin.com/in/megumi-kawagoe-88j/" rel="noreferrer" target="_blank"><Button className="contact-link-btn" variant="outline-primary"><LinkedInIcon /> LinkedIn</Button></a>
        <a href="https://github.com/Megumikawa" rel="noreferrer" target="_blank"><Button className="contact-link-btn github-btn" variant="outline-dark"><GitHubIcon /> Github</Button></a>
        <a href="mailto:megumikawagoe@gmail.com"><Button className="contact-link-btn" variant="outline-success email-btn"><EmailIcon /> Email</Button></a>
      </div>
    </div>
  )
}
export default Contact;
