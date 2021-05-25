import React from 'react';
// import { Link } from 'react-router-dom';
// import React from 'react';
import { Nav } from 'react-bootstrap';

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
          <Nav.Link eventKey="link-1">PROJECT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default Header;