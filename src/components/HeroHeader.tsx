import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import profileWallpaper from '../images/profile_wallpaper.png'
import profileWallpaper2 from '../images/profile_wallpaper2.png'

import { Socials } from "./Socials";

export function HeroHeader(){
  const theme = useTheme();

  return (
    <Box
      id="hero-header"
      sx={{
        position: 'relative',
        height: '70vh',
        width: '100vw',
        minHeight: '600px',
        pt: 8,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Box
          component="img"
          src={profileWallpaper}
          alt="Background"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.1)',
            [theme.breakpoints.up('md')]: {
              content: `url(${profileWallpaper2})`,
            },
          }}
        />
        <Box sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.4)'
        }} />
      </Box>
      
      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            color: 'white',
            transition: 'transform 0.1s ease-out'
          }}
          maxWidth={600}
        >
          <Typography
            variant="h2"
            component="h1"
            align="left"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              animation: 'fade-in 1s ease-out'
            }}
          >
            Joshua Scott Kelso
          </Typography>
          <Typography
            variant="h4"
            align="left"
            sx={{
              mb: 4,
              animation: 'slide-up 1s ease-out'
            }}
          >
            Lead Software Engineer
          </Typography>
          <Typography
            variant="h6"
            align="left"
            sx={{
              mb: 4,
              animation: 'slide-up 1s ease-out'
            }}
          >
            Lead Software Engineer and Academy Lead at Kainos specialising in full stack python, AWS, data pipelines, web development, and R'n'D
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ animation: 'fade-in 1s ease-out' }}
          >
            <Socials/>
          </Stack>
        </Box>
      </Container>
    </Box>
    )
}