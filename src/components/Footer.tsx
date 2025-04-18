import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import reactLogo from '../images/react.svg'
import viteLogo from '../images/vite.svg'

interface FooterProps {
  year: number
}

export function Footer({year}: FooterProps) {
  return (
    <Grid container spacing={1} maxWidth={900} margin="auto" marginTop={5}>
      <Grid size={6} alignContent={"center"}>
        <p style={{fontStyle: 'italic'}}>Made with Vite + React + Material UI</p>
        <p>© Copyright Joshua Kelso {year}</p>
      </Grid>
      <Grid size={6}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" width={50} />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo" alt="React logo" width={50} />
          </a>
          <a href="https://mui.com/core/" target="_blank">
            <img src="https://mui.com/static/logo.svg" className="logo" alt="Material UI logo" width={50} />
          </a>
        </Stack>
      </Grid>
    </Grid>
  )
}