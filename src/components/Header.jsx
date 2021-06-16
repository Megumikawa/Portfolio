import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link as Scroll } from 'react-scroll'



function Header() {
  return (
    <div className="nav-wrap">
      <Navbar bg="light" expand="lg" >
        <Scroll to="home" smooth={true} offset={-130}>
          <Navbar.Brand href="#">
            <img src="images/mklogo.png" className="logo" alt="logo" />
          </Navbar.Brand>
        </Scroll>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
          <Scroll to="about" smooth={true} offset={-130}><Nav.Link href="#about">About</Nav.Link></Scroll>
          <Scroll to="projects" smooth={true} offset={-120}><Nav.Link href="#projects">Projects</Nav.Link></Scroll>
          <Scroll to="contact" smooth={true} ><Nav.Link href="#contact">Contact</Nav.Link></Scroll>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Header;
