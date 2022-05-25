import React, { useState, useEffect } from 'react';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineGlobal } from "react-icons/ai";
import { Link as Scroll, Link } from 'react-scroll';
import 'flag-icon-css/css/flag-icon.min.css';
import cookies from 'js-cookie';
import { debounce } from '../utilities/helpers.js';


const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  // {
  //   code: 'de',
  //   name: 'Deutsche',
  //   country_code: 'de'
  // },
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

  // ----- style ------ //
  const navbarStyles = {
    textAlign: 'center',
    transition: 'top 0.6s',
    zIndex: '11',
    justifyContent: 'center'
  }

  const navLinkStyles = {
    color: '#fff',
    paddingBottom: '5px',
    fontSize: '20px'
  }

  // -----scroll events ----- //
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10 );
    setPrevScrollPos(currentScrollPos);
  },100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
      }, [prevScrollPos, visible, handleScroll])


  // ----- multiple language(i18n) ----- //
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const { t } = useTranslation()


  return (
    <div className="nav-wrap">
      <Navbar style={{ ...navbarStyles, top: visible ? '0' : '-70px' }} className="navbar-inner" collapseOnSelect expand="lg" >
        <Navbar.Toggle aria-controls="responsive-navbar-nav mr-1" className="hamburgerBtn" />
        <Navbar.Collapse id="responsive-navbar-nav" className="hamburgerInside" style={{flexGrow: '0', textAlign: 'right'}}>
          <Nav className="mr-auto">
            <Scroll to="about" smooth={true} offset={-130} duration={0}><Nav.Link href="#projects" className="header-link-name" style={navLinkStyles}>{t('header.about')}</Nav.Link></Scroll>
            <Scroll to="projects" smooth={true} offset={120}  duration={0}><Nav.Link href="#projects" className="header-link-name" style={navLinkStyles}>{t('header.projects')}</Nav.Link></Scroll>
            <Scroll to="contact" smooth={true} offset={0}  duration={0}><Nav.Link href="#contact" className="header-link-name" style={navLinkStyles}>{t('header.contact')}</Nav.Link></Scroll>
            <NavDropdown aria-expanded="false"
              title={
                <AiOutlineGlobal size={20} color={'#fff'} />
              }
              id="basic-nav-dropdown"
              className="languageBtn">

              {languages.map(({ code, name, country_code}) => (
                <NavDropdown.Item key={country_code}
                  onClick={() => i18next.changeLanguage(code)}
                  disable={code === currentLanguageCode}
                  style={{ opacity: code === currentLanguageCode ? 0.5 : 1}}
                >
                  <span 
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                    style={{ opacity: code === currentLanguageCode ? 0.5 : 1}}
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
