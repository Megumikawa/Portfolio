import React, { useState, useEffect } from 'react';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import global from '../global.png';

import { Link as Scroll, Link } from 'react-scroll';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import cookies from 'js-cookie';
import { debounce } from '../utilities/helpers.js';



const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'ja',
    name: '日本語',
    country_code: 'jp'
  }
]




function Header() {

// ----- navbar scroll animation ----- //
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const navbarStyles = {
    position: 'fixed',
    height: '45px',
    width: '100%',
    // backgroundColor: 'grey',
    textAlign: 'center',
    transition: 'top 0.6s',
    zIndex: '11',
    paddingTop: '20px'
  }


  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10 );
    setPrevScrollPos(currentScrollPos);
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
      }, [prevScrollPos, visible, handleScroll])

// ----- multiple language(i18n) ----- //
  const currentLanguageCode = cookies.get('i18next') || 'en'
  // const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const { t } = useTranslation()

  // useEffect(() => {
  //   document.body.dir = currentLanguage.dir || 'ltr'
  // }, [currentLanguage, t])


  return (
    <div className="nav-wrap">
      <Navbar style={{ ...navbarStyles, top: visible ? '0' : '-70px' }} className="navbar-inner" collapseOnSelect expand="lg" >
        <Scroll to="home" smooth={true} offset={-130}>
          <Navbar.Brand href="#">
            <img src="images/myillust.png" className="logo-image" alt="logo" />
            {/* <img src="images/mklogo.png" className="logo" alt="logo" /> */}
          </Navbar.Brand>
        </Scroll>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{flexGrow: '0'}}>
          <Nav clasName="me-auto">
            <Scroll to="about" smooth={true} offset={-120}><Nav.Link href="#projects" className="header-link-name">About</Nav.Link></Scroll>
            <Scroll to="projects" smooth={true} offset={-90}><Nav.Link href="#projects" className="header-link-name">Projects</Nav.Link></Scroll>
            <Scroll to="contact" smooth={true} ><Nav.Link href="#contact" className="header-link-name">Contact</Nav.Link></Scroll>
            <NavDropdown aria-expanded="false"
              title={
                <img className="thumbnail-image" src={global} style={{width:'30px'}} alt="language-icon" />
              }
              id="basic-nav-dropdown">

              {languages.map(({ code, name, country_code}) => (
                <NavDropdown.Item key={country_code}
                  onClick={() => i18next.changeLanguage(code)}
                  disable={code === currentLanguageCode}
                  style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}>
                  <span 
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                    style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                  >
                  </span>
                  {name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Header;
