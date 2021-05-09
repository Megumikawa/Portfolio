import React from 'react';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

function Header() {
  return (
    <div>
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
    </div>
  )
}
export default Header;