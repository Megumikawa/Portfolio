import React from 'react';
import Particles from 'react-particles-js';
import { particlesOptions } from "./ParticlesOptions";

function ProjectsBackground() {
  return (
    <div className="background projects-background">
      <Particles className="particles particles-project" params={particlesOptions} />
    </div>
  )
}
export default ProjectsBackground;