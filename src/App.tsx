import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { Box, Button, Stack, Typography } from '@mui/material'
import { HeroHeader } from './components/HeroHeader'
import { Badges } from './components/Badges'
import { Socials } from './components/Socials'

import DownloadIcon from '@mui/icons-material/Download';
import { Highlights } from './pages/Highlights'
import { UnderlinedHeader } from './components/UnderlinedHeader'

function App() {
  const year = new Date().getFullYear()
  const START_CAREER_YEAR = 2020
  const yearsExperience = year - START_CAREER_YEAR

  const CV_URL = "https://1drv.ms/b/c/c486233ae5b6e226/ESbituU6I4YggMTwOgAAAAABhTY3dWcHLoA5S1k7pw0Uaw"
  return (
    <>
      <HeroHeader />
      <Box sx={{ margin: '0 auto', maxWidth: '1280px', textAlign: 'center' }} >
        <Typography variant='h6' sx={{marginX: {xs: 5, md:10}}} marginTop={10} marginBottom={5} >
          Josh is a lead software engineer with {yearsExperience} year's technical industry experience with a 1st honour master's in computer science from <a href='https://www.qub.ac.uk/'>Queen's University Belfast</a>.  Having spent 2+ years in R'n'D Josh has a keen interest for innovation services, research, L&D and is equipped with initiative and drive to ensure that he capitalises on these new and emerging digital discoveries and curates them into new and existing client products.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginBottom: 10 }}>
          <Button variant="outlined" href={CV_URL} target='_blank' endIcon={<DownloadIcon />}>Download CV</Button>
        </Stack>

        <UnderlinedHeader title="Highlights" sx={{marginX: {xs: 5, md:10}}} />
        <Highlights/>
        <Badges/>

        <Box marginTop={5} sx={{padding: 2}}>
          <nav>
            <Link to="/me/experience">Experience</Link>
            {" | "}
            <Link to="/me/tech">Technologies</Link>
            {" | "}
            <Link to="/me/contact">Contact</Link>
          </nav>
          <Outlet/>
          

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
