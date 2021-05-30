import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img src="images/mklogo.png" className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/About">About</Nav.Link>
            {/* <Nav.Link href="/Skills">Skills</Nav.Link> */}
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Header;
