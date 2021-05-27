import React from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from 'react-bootstrap/Button';



const Contact = () => {


  return (
    <>
      <h1>Questions?</h1>
      <h2>Let's talk and get in touch!!</h2>
      <Button variant="outline-primary"><LinkedInIcon />LinkedIn</Button>
      <Button variant="outline-dark"><GitHubIcon />Github</Button>
      <Button variant="outline-info"><EmailIcon />Email</Button>
    </>
  )
}
export default Contact;