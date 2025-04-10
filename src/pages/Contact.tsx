import { Typography } from "@mui/material"

export function Contact() {
  const email = "joshkelsowork@gmail.com"
  return (
    <>
      <Typography variant="h4">
        <a href={"mailto:" + email}>{email}</a>
      </Typography>
      <Typography variant="h6">
        References on request
      </Typography>
    </>
  )
}