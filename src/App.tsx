import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import awsImg from './images/aws.png'
import microsoftImg from './images/microsoft.png'
import ibmImg from './images/ibm.png'
import Grid from '@mui/material/Grid'
import { Box, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function App() {
  const year = new Date().getFullYear()
  return (
    <Box sx={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <h1>Joshua Scott Kelso</h1>
      <h2>Full Stack Lead Software Engineer</h2>
      <Box maxWidth={900} alignContent={"center"} margin="auto" marginTop={5} marginBottom={5}>
        <Typography className="read-the-docs" >
        Josh is a lead software engineer with five year's technical industry experience with a 1st honour master's in computer science from <a href='https://www.qub.ac.uk/'>Queen's University Belfast</a>.  Having spent 2+ years in R'n'D Josh has a keen interest for innovation services, research, L&D and is equipped with initiative and drive to ensure that he capitalises on these new and emerging digital discoveries and curates them into new and existing client products.
        </Typography>
      </Box>

      <Grid container spacing={1} maxWidth={900} margin="auto" marginTop={5} marginBottom={15}>
        <Grid size={4}>
          <img src={awsImg} alt="Logo" style={{ width: '100%', maxWidth: 150, height: 'auto'}} />
        </Grid>
        <Grid size={4}>
          <img src={microsoftImg} alt="Logo" style={{ width: '100%', maxWidth: 150, height: 'auto'}}/>
        </Grid>
        <Grid size={4}>
          <img src={ibmImg} alt="Logo" style={{ width: '100%', maxWidth: 150, height: 'auto'}} />
        </Grid>
      </Grid>

      <nav>
        <Link to="/me/">Highlights</Link>
        {" | "}
        <Link to="/me/experience">Experience</Link>
        {" | "}
        <Link to="/me/profile">Profile</Link>
        {" | "}
        <Link to="/me/tech">Technologies</Link>
        {" | "}
        <Link to="/me/contact">Contact</Link>
      </nav>
      <Outlet />

      <Grid container spacing={1} maxWidth={900} margin="auto" marginTop={5}>
        <Grid size={6} alignContent={"center"}>
          <p style={{fontStyle: 'italic'}}>Made with Vite + React + Material UI</p>
          <p>© Copyright Joshua Kelso {year}</p>
        </Grid>
        <Grid size={6}>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" width={50} />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" width={50} />
          </a>
        </Grid>
      </Grid>

      <Box>
        <a href='https://github.com/scottkelso' target="_blank">
          <GitHubIcon sx={{mx: 2}} />
        </a>
        <a href='https://www.linkedin.com/in/kelsojosh/' target="_blank">
        <LinkedInIcon sx={{mx: 2}} />
        </a>
        <a href='https://x.com/scottkelso07' target="_blank">
        <XIcon sx={{mx: 2}} />
        </a>
      </Box>
    </Box>
  )
}

export default App
