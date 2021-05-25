import React from 'react';
// import { Link } from 'react-router-dom';
// import React from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from '@material-ui/core';


function Header() {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/works">PROJECT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contact">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default Header;