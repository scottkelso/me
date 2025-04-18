import './App.css'
import { Box, Button, Stack, Typography } from '@mui/material'
import { HeroHeader } from './components/HeroHeader'
import { Badges } from './components/Badges'
import { Socials } from './components/Socials'

import DownloadIcon from '@mui/icons-material/Download';
import { Highlights } from './pages/Highlights'
import { UnderlinedHeader } from './components/UnderlinedHeader'
import { Experience } from './pages/Experience'
import { Technologies } from './pages/Technologies'
import { Contact } from './pages/Contact'
import MyWordCloud from './components/MyWordCloud'
import { Footer } from './components/Footer'

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
          <Button variant="contained" href={CV_URL} target='_blank' endIcon={<DownloadIcon />}>Download CV</Button>
        </Stack>

        <Box marginY={10}>
          <UnderlinedHeader title="Highlights" sx={{marginX: {xs: 5, md:10}}} />
          <Highlights/>
          <Badges/>
        </Box>

        <Box marginY={10}>
          <UnderlinedHeader title="Technical Experience" sx={{marginX: {xs: 5, md:10}}} />
          <Experience/>
        </Box>

        <Box marginY={10}>
          <UnderlinedHeader title="Technologies" sx={{marginX: {xs: 5, md:10}}} />
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 5,
          }}>
            <MyWordCloud width={600} height={300} />
          </Box>
          <Technologies/>
        </Box>

        <Box marginTop={10}>
          <UnderlinedHeader title="Contact" sx={{marginX: {xs: 5, md:10}, marginBottom: 3}} />
          <Contact/>
        </Box>

        <Box sx={{padding: 2}}>
          <Footer year={year}/>
          <Socials/>
        </Box>
      </Box>
    </>
  )
}

export default App
