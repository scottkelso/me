import { Box, Button, Stack, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';

export function Contact() {
  const email = "joshkelsowork@gmail.com"
  return (
    <>
      <Stack>
        <Box paddingBottom={3}>
          <Button variant="contained" href={"mailto:" + email} endIcon={<EmailIcon />}>Email</Button>
        </Box>
        <Typography variant="h6">
          References on request
        </Typography>
        <Typography>
          <a href={"mailto:" + email}>{email}</a>
        </Typography>
      </Stack>
    </>
  )
}