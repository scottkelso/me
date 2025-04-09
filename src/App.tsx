import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import { HeroHeader } from './components/HeroHeader'
import { Badges } from './components/Badges'
import { Socials } from './components/Socials'

function App() {
  const year = new Date().getFullYear()
  return (
    <>
      <HeroHeader />
      <Box sx={{ margin: '0 auto', maxWidth: '1280px', textAlign: 'center' }} >
        <Box marginTop={5} sx={{padding: 2}}>
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
          <Outlet/>
          
          <Badges/>

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

          <Socials/>
        </Box>
      </Box>
    </>
  )
}

export default App
