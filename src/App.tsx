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
      <Box sx={{ margin: '0 auto', width: '100vw', maxWidth: '1280px', textAlign: 'center' }} >
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
            <MyWordCloud />
          </Box>
          <Technologies/>
        </Box>

        <Box marginY={10}>
          <UnderlinedHeader title="Achievements & Skills" sx={{marginX: {xs: 5, md:10}}} />
          <Box maxWidth={900} sx={{marginX: {xs: 2, md:7}}} marginTop={5} marginBottom={5}>
            <ul style={{ textAlign: "left" }}>
                <li>Bronze, Silver and Gold Duke of Edinburgh</li>
                <li>Northgate Cup for excellence in ICT</li>
                <li>McCreary Trophy for excellence in Musical Production</li>
                <li>Clifford Bell Memorial Plate for excellence in Technology and Design</li>
                <li>NGB (National Governing Bodies) Leadership Awarded qualifications for Sailing and Windsurfing</li>
                <li>ABRSM Certificates Including Distinction in Grade 8 Singing and Merit in Grade 5 Music Theory</li>
                <li>Gold British Science Association Crest Award</li>
            </ul>
          </Box>
        </Box>

        <Box marginY={10}>
          <UnderlinedHeader title="Recommendations" sx={{marginX: {xs: 5, md:10}}} />
          <Box maxWidth={900} sx={{marginX: {xs: 2, md:7}}} marginTop={5} marginBottom={5}>
            <ul style={{ textAlign: "left" }}>
                <li>Josh is future leader material who has a strong background in Python, web development, R&D, and AWS. He is proactive and always willing to take on new challenges. Josh has a proven track record of delivering high-quality projects on time and within budget. He is an excellent communicator who can work effectively with cross-functional teams and stakeholders. Josh is a quick learner and always stays up-to-date with the latest technologies and trends in his field. He is passionate about mentoring and developing his team members and is always willing to go the extra mile to ensure that his team delivers the best possible results. - Brynjar</li>
                <li>Josh is a great listener, which contributes significantly to his ability to understand and address the needs of his colleagues. This quality, combined with his composed demeanour under pressure, has made him an invaluable asset to the team. - Joanne</li>
            </ul>
          </Box>
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
