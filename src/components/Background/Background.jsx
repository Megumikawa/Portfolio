import React from 'react'
import Particles from 'react-particles-js';
import { particlesOptions } from "./ParticlesOptions";
import './Background.css';

function Background() {
  return (
    <div className="background">
      <Particles className="particles" params={particlesOptions} />
    </div>
  )
}
export default Background;
