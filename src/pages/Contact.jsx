import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from 'react-bootstrap/Button';



const Contact = () => {

  return (
    <>
      <h1>Questions?</h1>
      <h2>et in touch!!</h2>
      <Button variant="outline-primary"><LinkedInIcon />LinkedIn</Button>
      <Button variant="outline-dark"><GitHubIcon />Github</Button>
      <Button variant="outline-success"><EmailIcon />Email</Button>
    </>
  )
}
export default Contact;
