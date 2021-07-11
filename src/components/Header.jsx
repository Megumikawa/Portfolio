import React, { useState, useEffect } from 'react';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link as Scroll, Link } from 'react-scroll';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import LanguageIcon from '@material-ui/icons/Language';
import cookies from 'js-cookie';
import { debounce } from '../utilities/helpers.js';
import { width } from '@material-ui/system';


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
    height: '70px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center',
    transition: 'top 0.6s',
    zIndex: '11'
  }

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
      }, [prevScrollPos, visible, handleScroll])

// ----- multiple language(i18n) ----- //
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
  }, [currentLanguage, t])


  return (
    <div className="nav-wrap">
      <Navbar style={{ ...navbarStyles, top: visible ? '0' : '-70px' }} collapseOnSelect bg="light" expand="lg" >
        <Scroll to="home" smooth={true} offset={-130}>
          <Navbar.Brand href="#">
            {/* <img src="images/myillust.png" className="logo" alt="logo" /> */}
            <img src="images/mklogo.png" className="logo" alt="logo" />
          </Navbar.Brand>
        </Scroll>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{flexGrow: '0'}}>
          <Nav clasName="ml-auto nac=container">
            <Link to="about" smooth={true} offset={-120}><Nav.Link href="#about">About</Nav.Link></Link>
            <Scroll to="projects" smooth={true} offset={-150}><Nav.Link href="#projects">Projects</Nav.Link></Scroll>
            <Scroll to="contact" smooth={true} ><Nav.Link href="#contact">Contact</Nav.Link></Scroll>
            <button 
              className="btn btn-link dropdown-toggle language-btn"
              type="button"
              id="dropdownMenuButton1" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
            <LanguageIcon />
            </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <span className="dropdown-item-text">{t('language')}</span>
                </li>
                {languages.map(({ code, name, country_code}) => (
                  <li key={country_code}>
                    <button 
                      className="dropdown-item" 
                      onClick={() => i18next.changeLanguage(code)}
                      disable={code === currentLanguageCode}
                      style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                    >
                      <span 
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                        style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                      >
                      </span>
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Header;
