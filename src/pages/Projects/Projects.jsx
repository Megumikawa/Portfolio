import React from 'react';
// import * as React from 'react';

// import KittchatProject from './KittchatProject';
// import AnimeekProject from './AnimeekProject';
// import CoingameProject from './CoingameProject';
// import FeuilleProject from './FeuilleProject';
// import CyptoProject from './CyptoProject';
// import TodoProject from './TodoProject';
import ProjectsBackground from './ProjectsBackground';
import './Projects.css';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  return (
    <>
      <ProjectsBackground />
      <div id="projects" className="projects">
        <h1>Projects</h1>
      
      <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Cat cafe booking app</Typography>
        <Typography variant="body2" color="text.secondary">#React #React #React</Typography>
        </CardContent>
        <CardActions>
            
            <a href="https://github.com/Megumikawa/Kittchat-client" target="_blank"><GitHubIcon /></a>
            <a href="https://github.com/Megumikawa/Kittchat-client" target="_blank"><GitHubIcon /></a>
        
      </CardActions>
        <CardMedia
        component="img"
        height="200"
        image="images/kittchat1.png"
        alt="green iguana"
      />
      
        </Card>
        </div>





          {/* <KittchatProject />
          <AnimeekProject />
          <CoingameProject />
          <CyptoProject />
          <TodoProject />
          <FeuilleProject /> */}
        
    </>
  )
}
export default Projects;
