import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 >Questions?</h1>
      <h2>Get in touch!!</h2>
      <div className="contact-link">
        <a href="https://www.linkedin.com/in/megumi-kawagoe-88j/" rel="noreferrer" target="_blank"><Button variant="outline-primary"><LinkedInIcon />LinkedIn</Button></a>
        <a href="https://github.com/Megumikawa" rel="noreferrer" target="_blank"><Button variant="outline-dark"><GitHubIcon />Github</Button></a>
        <a href="mailto:megumikawagoe@gmail.com"><Button variant="outline-success"><EmailIcon />Email</Button></a>
      </div>
    </div>
  )
}
export default Contact;
