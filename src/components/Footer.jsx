import React from 'react';
import Particles from 'react-particles-js';
import { particlesOptions } from "../components/Background/ParticlesOptions";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-background"><Particles className="particles particles-footer " params={particlesOptions} /></div>
      <div className="footer-background2"><small >&copy;2021 Created by Megumi Kawagoe</small></div>
    </div>
  )
}
export default Footer;