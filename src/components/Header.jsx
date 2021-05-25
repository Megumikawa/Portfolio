import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';



function Header() {
  return (
    <>
      <div>
        <Link to="/">logo</Link>
      </div>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default Header;